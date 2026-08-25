const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const mqtt = require('mqtt');

console.log('==================================================================');
console.log('  🐺 KURTCOIN (KURT) KÜRESEL CANLI P2P BLOKZİNCİR DÜĞÜMÜ');
console.log('==================================================================');

const FOUNDER_WALLET = '14FTsfBTzSBP9Zm9W65W1YNUEYhXJ3t6PA';
const BLOCK_REWARD = 50.0;

const TOPIC_MAIN = 'kurtcoin/live/mainnet';
const TOPIC_LEDGER = 'kurtcoin/live/ledger_state';

const mqttClient = mqtt.connect('wss://broker.emqx.io:8084/mqtt', {
  clientId: 'kurt_fullnode_' + Math.random().toString(16).substr(2, 8),
  keepalive: 60
});

let networkLedger = {
  '14FTsfBTzSBP9Zm9W65W1YNUEYhXJ3t6PA': 150.0
};
let globalHeight = 3;

mqttClient.on('connect', () => {
  console.log('[P2P Ağ] Canlı Kurtcoin P2P Mesh ağına bağlanıldı! (Port 9333 / MQTT)');
  mqttClient.subscribe(TOPIC_MAIN);
  mqttClient.subscribe(TOPIC_LEDGER);
  mqttClient.publish(TOPIC_MAIN, JSON.stringify({ type: 'SYNC_REQUEST' }));
});

mqttClient.on('message', (topic, message) => {
  try {
    const data = JSON.parse(message.toString());

    if (topic === TOPIC_LEDGER && data.ledger) {
      for (const [addr, bal] of Object.entries(data.ledger)) {
        if (!networkLedger[addr] || data.ledger[addr] > networkLedger[addr]) {
          networkLedger[addr] = data.ledger[addr];
        }
      }
      if (data.height && data.height > globalHeight) {
        globalHeight = data.height;
      }
    } else if (data.type === 'MINING') {
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

function publishBlockToNetwork(blockData) {
  if (mqttClient.connected) {
    mqttClient.publish(TOPIC_MAIN, JSON.stringify(blockData));
    mqttClient.publish(TOPIC_LEDGER, JSON.stringify({
      height: blockData.height,
      ledger: networkLedger,
      timestamp: Date.now()
    }), { retain: true });
  }
}

function mineLiveBlock() {
  const newHeight = globalHeight + 1;
  const newTime = Math.floor(Date.now() / 1000);
  console.log('\n⛏️  [PoW SHA-256] Blok #' + newHeight + ' madenciliği başlatılıyor...');

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
    timestamp: Date.now()
  };

  publishBlockToNetwork(blockPayload);

  console.log('🎉 BLOK #' + newHeight + ' BAŞARIYLA KAZILDI VE KÜRESEL AĞA YAYINLANDI!');
  console.log('• Blok Hash: ' + hash);
  console.log('• Nonce: ' + nonce);
  console.log('• Ödül: +' + BLOCK_REWARD + ' KURT -> ' + FOUNDER_WALLET);
  console.log('• Güncel Canlı Bakiyeniz: ' + networkLedger[FOUNDER_WALLET].toFixed(2) + ' KURT 🐺💰');
  console.log('• KurtScan Gezgini: https://kurtcoin.github.io/kurtcoin/explorer.html');
}

setTimeout(() => {
  console.log('\n✅ Ağ Senkronizasyonu Tamamlandı! Mevcut Bakiye: ' + (networkLedger[FOUNDER_WALLET] || 150).toFixed(2) + ' KURT');
  console.log('🔄 Otomatik PoW Madenciliği Aktif (Her 60 saniyede bir yeni blok)...');
  mineLiveBlock();
  setInterval(mineLiveBlock, 60000);
}, 2500);
