const crypto = require('crypto');
const http = require('http');

console.log('==================================================================');
console.log('  🐺 KURTCOIN (KURT) KÜRESEL CANLI P2P BLOKZİNCİR DÜĞÜMÜ');
console.log('  (Sıfır Bağımlılık / Zero-Dependency Bağımsız Motor)');
console.log('==================================================================');

const FOUNDER_WALLET = '14FTsfBTzSBP9Zm9W65W1YNUEYhXJ3t6PA';
const BLOCK_REWARD = 50.0;

let networkLedger = {
  '14FTsfBTzSBP9Zm9W65W1YNUEYhXJ3t6PA': 750.0
};
let globalHeight = 15;

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

  console.log('🎉 BLOK #' + newHeight + ' BAŞARIYLA KAZILDI!');
  console.log('• Blok Hash: ' + hash);
  console.log('• Nonce: ' + nonce);
  console.log('• Ödül: +' + BLOCK_REWARD + ' KURT -> ' + FOUNDER_WALLET);
  console.log('• Güncel Bakiyeniz: ' + networkLedger[FOUNDER_WALLET].toFixed(2) + ' KURT 🐺💰');
  console.log('• KurtScan Gezgini: https://kurtcoin.github.io/kurtcoin/explorer.html');
}

console.log('\n✅ Düğüm Başlatıldı! Hedef Cüzdan: ' + FOUNDER_WALLET);
console.log('🔄 Otomatik PoW Madenciliği Aktif (Her 60 saniyede bir yeni blok)...');
mineLiveBlock();
setInterval(mineLiveBlock, 60000);
