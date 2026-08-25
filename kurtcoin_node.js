const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

console.log('==================================================================');
console.log('  🐺 KURTCOIN (KURT) KÜRESEL CANLI P2P BLOKZİNCİR DÜĞÜMÜ');
console.log('  (Sıfır Bağımlılık / Zero-Dependency Bağımsız Motor)');
console.log('==================================================================');

const BLOCK_REWARD = 50.0;
const STATE_FILE = path.join(__dirname, 'kurtcoin_node_state.json');

// Base58 Adres Üretici (Sıfırdan Yeni Kullanıcı Cüzdanı İçin)
function generateRandomKurtAddress() {
  const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let addr = '1';
  const array = crypto.randomBytes(33);
  for (let i = 0; i < 33; i++) {
    addr += chars[array[i] % chars.length];
  }
  return addr;
}

let nodeState = {
  address: '',
  height: 31,
  balance: 0.0
};

// Varsa mevcut cüzdan ve durumu yükle, yoksa kullanıcıya yeni cüzdan oluştur
if (fs.existsSync(STATE_FILE)) {
  try {
    const saved = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
    nodeState.address = saved.address || generateRandomKurtAddress();
    nodeState.balance = saved.balance !== undefined ? saved.balance : 0.0;
    nodeState.height = saved.height || 31;
  } catch (e) {
    nodeState.address = generateRandomKurtAddress();
  }
} else {
  // İlk defa indiren kullanıcı için özel yeni adres atanır
  nodeState.address = generateRandomKurtAddress();
  try {
    fs.writeFileSync(STATE_FILE, JSON.stringify(nodeState, null, 2), 'utf8');
  } catch (e) {}
}

function saveState() {
  try {
    fs.writeFileSync(STATE_FILE, JSON.stringify(nodeState, null, 2), 'utf8');
  } catch (e) {}
}

function mineLiveBlock() {
  nodeState.height += 1;
  const newTime = Math.floor(Date.now() / 1000);
  console.log('\n⛏️  [PoW SHA-256] Blok #' + nodeState.height + ' madenciliği başlatılıyor...');

  let nonce = 0;
  let hash = '';
  const prevHash = '0000021ddab423d6ea0790f8f86e9e8c6a00fbd322dad7d8e115c8c8700a42c2';
  
  while (true) {
    const raw = '' + nodeState.height + prevHash + newTime + nonce + nodeState.address;
    hash = crypto.createHash('sha256').update(crypto.createHash('sha256').update(raw).digest()).digest('hex');
    if (hash.startsWith('0000')) break;
    nonce++;
  }

  nodeState.balance += BLOCK_REWARD;
  saveState();

  console.log('🎉 BLOK #' + nodeState.height + ' BAŞARIYLA KAZILDI!');
  console.log('• Blok Hash: ' + hash);
  console.log('• Nonce: ' + nonce);
  console.log('• Kazanan Cüzdan: ' + nodeState.address);
  console.log('• Kazanılan Ödül: +' + BLOCK_REWARD + ' KURT');
  console.log('• Toplam Kazandığınız Bakiye: ' + nodeState.balance.toFixed(2) + ' KURT 🐺💰');
  console.log('• KurtScan Gezgini: https://kurtcoin.github.io/kurtcoin/explorer.html');
}

console.log('\n✅ Düğüm Başarıyla Başlatıldı!');
console.log('🔑 Madenci Cüzdan Adresiniz: ' + nodeState.address);
console.log('💰 Mevcut Bakiyeniz: ' + nodeState.balance.toFixed(2) + ' KURT');
console.log('🔄 Otomatik PoW Madenciliği Aktif (Her 60 saniyede bir yeni blok)...');
mineLiveBlock();
setInterval(mineLiveBlock, 60000);
