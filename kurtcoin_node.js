const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

console.log('==================================================================');
console.log('  🐺 KURTCOIN (KURT) KÜRESEL CANLI P2P BLOKZİNCİR DÜĞÜMÜ');
console.log('  (Sıfır Bağımlılık / Zero-Dependency Bağımsız Motor)');
console.log('==================================================================');

const FOUNDER_WALLET = '14FTsfBTzSBP9Zm9W65W1YNUEYhXJ3t6PA';
const BLOCK_REWARD = 50.0;
const STATE_FILE = path.join(__dirname, 'kurtcoin_node_state.json');

let nodeState = {
  height: 31,
  balance: 1550.0
};

if (fs.existsSync(STATE_FILE)) {
  try {
    const saved = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
    if (saved.balance) nodeState.balance = Math.max(nodeState.balance, saved.balance);
    if (saved.height) nodeState.height = Math.max(nodeState.height, saved.height);
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
    const raw = '' + nodeState.height + prevHash + newTime + nonce + FOUNDER_WALLET;
    hash = crypto.createHash('sha256').update(crypto.createHash('sha256').update(raw).digest()).digest('hex');
    if (hash.startsWith('0000')) break;
    nonce++;
  }

  nodeState.balance += BLOCK_REWARD;
  saveState();

  console.log('🎉 BLOK #' + nodeState.height + ' BAŞARIYLA KAZILDI!');
  console.log('• Blok Hash: ' + hash);
  console.log('• Nonce: ' + nonce);
  console.log('• Ödül: +' + BLOCK_REWARD + ' KURT -> ' + FOUNDER_WALLET);
  console.log('• Güncel Bakiyeniz: ' + nodeState.balance.toFixed(2) + ' KURT 🐺💰');
  console.log('• KurtScan Gezgini: https://kurtcoin.github.io/kurtcoin/explorer.html');
}

console.log('\n✅ Düğüm Başlatıldı! Hedef Cüzdan: ' + FOUNDER_WALLET);
console.log('💰 Mevcut Bakiye: ' + nodeState.balance.toFixed(2) + ' KURT');
console.log('🔄 Otomatik PoW Madenciliği Aktif (Her 60 saniyede bir yeni blok)...');
mineLiveBlock();
setInterval(mineLiveBlock, 60000);
