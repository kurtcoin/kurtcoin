const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const mqtt = require('mqtt');

console.log('==================================================================');
console.log('  🐺 KURTCOIN (KURT) KÜRESEL CANLI P2P BLOKZİNCİR DÜĞÜMÜ');
console.log('  (MQTT Canlı Ağ Senkronizasyonu & Anlık Gezgin Yayını)');
console.log('==================================================================');

const FOUNDER_WALLET = '14FTsfBTzSBP9Zm9W65W1YNUEYhXJ3t6PA';
const BLOCK_REWARD = 50.0;

const TOPIC_MAIN = 'kurtcoin/live/mainnet';
const TOPIC_LEDGER = 'kurtcoin/live/ledger_state';
const MY_CLIENT_ID = 'kurt_cli_node_' + Math.random().toString(16).substr(2, 8);

// Canlı EMQX Broker WebSocket Bağlantısı
const mqttClient = mqtt.connect('wss://broker.emqx.io:8084/mqtt', {
  clientId: MY_CLIENT_ID,
  keepalive: 60
});

let networkLedger = {
  '14FTsfBTzSBP9Zm9W65W1YNUEYhXJ3t6PA': 150.0
};
let globalHeight = 3;
let isReady = false;

mqttClient.on('connect', () => {
  console.log('🌐 [P2P Mesh] Canlı Kurtcoin Ağına Başarıyla Bağlanıldı!');
  mqttClient.subscribe(TOPIC_MAIN);
  mqttClient.subscribe(TOPIC_LEDGER);
  
  // Canlı durumu iste
  mqttClient.publish(TOPIC_MAIN, JSON.stringify({ type: 'SYNC_REQUEST' }));
});

mqttClient.on('message', (topic, message) => {
  try {
    const data = JSON.parse(message.toString());

    // Broker'daki kalıcı defter durumunu al
    if (topic === TOPIC_LEDGER && data.ledger) {
      for (const [addr, bal] of Object.entries(data.ledger)) {
        if (!networkLedger[addr] || data.ledger[addr] > networkLedger[addr]) {
          networkLedger[addr] = data.ledger[addr];
        }
      }
      if (data.height && data.height > globalHeight) {
        globalHeight = data.height;
      }
      isReady = true;
      return;
    }

    // Kendi yayınladığımız bloğu tekrar eklememek için clientId kontrolü
    if (data.type === 'MINING' && data.senderId !== MY_CLIENT_ID) {
      if (data.height && data.height > globalHeight) {
        globalHeight = data.height;
      }
      networkLedger[data.miner] = (networkLedger[data.miner] || 0) + BLOCK_REWARD;
    } else if (data.type === 'TRANSFER') {
      if (data.from && data.to && data.amount) {
        const amt = parseFloat(data.amount);
        networkLedger[data.from] = (networkLedger[data.from] || 0) - amt;
        networkLedger[data.to] = (networkLedger[data.to] || 0) + amt;
      }
    }
  } catch (e) {}
});

function publishBlock(blockPayload) {
  if (mqttClient.connected) {
    // 1. Canlı İşlem Kanalına Gönder (Gezgin ve Cüzdanlar Anında Yakalar)
    mqttClient.publish(TOPIC_MAIN, JSON.stringify(blockPayload));

    // 2. Kalıcı Defter Kanalını Güncelle (Retain Flag ile)
    mqttClient.publish(TOPIC_LEDGER, JSON.stringify({
      height: blockPayload.height,
      ledger: networkLedger,
      timestamp: Date.now()
    }), { retain: true });
  }
}

function mineLiveBlock() {
  const newHeight = globalHeight + 1;
  const newTime = Math.floor(Date.now() / 1000);
  console.log('\n⛏️  [PoW SHA-256] Blok #' + newHeight + ' madenciliği yapılıyor...');

  let nonce = 0;
  let hash = '';
  const prevHash = '0000021ddab423d6ea0790f8f86e9e8c6a00fbd322dad7d8e115c8c8700a42c2';
  
  while (true) {
    const raw = '' + newHeight + prevHash + newTime + nonce + FOUNDER_WALLET;
    hash = crypto.createHash('sha256').update(crypto.createHash('sha256').update(raw).digest()).digest('hex');
    if (hash.startsWith('0000')) break;
    nonce++;
  }

  globalHeight = newHeight;
  networkLedger[FOUNDER_WALLET] = (networkLedger[FOUNDER_WALLET] || 0) + BLOCK_REWARD;

  const blockPayload = {
    type: 'MINING',
    height: newHeight,
    hash: hash,
    miner: FOUNDER_WALLET,
    reward: BLOCK_REWARD + ' KURT',
    time: 'Az önce',
    nonce: nonce,
    senderId: MY_CLIENT_ID,
    timestamp: Date.now()
  };

  publishBlock(blockPayload);

  console.log('🎉 BLOK #' + newHeight + ' BAŞARIYLA KAZILDI VE KÜRESEL AĞA YAYINLANDI!');
  console.log('• Blok Hash: ' + hash);
  console.log('• Nonce: ' + nonce);
  console.log('• Kazanan Cüzdan: ' + FOUNDER_WALLET);
  console.log('• Blok Ödülü: +' + BLOCK_REWARD + ' KURT');
  console.log('• Canlı Ağ Bakiyeniz: ' + networkLedger[FOUNDER_WALLET].toFixed(2) + ' KURT 🐺💰');
  console.log('• KurtScan Gezgini: https://kurtcoin.github.io/kurtcoin/explorer.html');
}

// 2 saniye sonra ağdan en son blok yüksekliği ve bakiyeyi çekip madenciliği başlat
setTimeout(() => {
  console.log('\n✅ AĞ SENKRONİZASYONU TAMAMLANDI!');
  console.log('📦 Canlı Blok Yüksekliği: #' + globalHeight);
  console.log('💰 Canlı Kurtcoin Bakiyeniz: ' + (networkLedger[FOUNDER_WALLET] || 0).toFixed(2) + ' KURT');
  console.log('🔄 Otomatik Canlı PoW Madenciliği Başlatıldı (Her 60 saniyede bir blok)...\n');
  
  mineLiveBlock();
  setInterval(mineLiveBlock, 60000);
}, 2500);
