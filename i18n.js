// Kurtcoin Comprehensive i18n Translation Engine (All Dynamic Texts & Modals Included)
const KURT_TRANSLATIONS = {
  tr: {
    // Nav & Common
    nav_about: "Hakkında",
    nav_specs: "Özellikler",
    nav_explorer: "KurtScan Gezgini",
    nav_whitepaper: "Whitepaper",
    nav_wallet: "Web Cüzdanı",
    nav_wallet_enter: "⚡ Cüzdana Giriş",
    nav_home: "Ana Sayfa",

    // Index Hero
    hero_badge: "🔥 KATMAN-1 BLOKZİNCİR",
    hero_title: "THE WOLFPACK AWAKENS",
    hero_desc: "Kurtcoin (KURT), Bitcoin mimarisi üzerine kurulu, 10 kat daha hızlı blok onay süreleri ve 100 Milyonluk adil arzı ile topluluk gücünü merkeze alan yeni nesil bağımsız bir kripto para protokolüdür.",
    btn_create_wallet: "💳 Cüzdan Oluştur / Giriş Yap",
    btn_download_node: "📦 Düğüm İndir (Release)",
    btn_read_whitepaper: "Whitepaper Oku",

    // Specs
    specs_title: "🐺 TEKNİK ÖZELLİKLER",
    spec_supply_label: "Toplam Arz",
    spec_supply_val: "100.000.000",
    spec_supply_desc: "Sabit ve deflasyonist maksimum token arzı.",
    spec_blocktime_label: "Blok Süresi",
    spec_blocktime_val: "1 Dakika",
    spec_blocktime_desc: "Bitcoin'e göre 10 kat daha hızlı işlem onay süresi.",
    spec_genesis_label: "Genesis Ödülü",
    spec_genesis_val: "50 KURT",
    spec_genesis_desc: "Sıfırıncı blokta oluşturulan kurucu blok ödülü.",
    spec_consensus_label: "Konsensüs",
    spec_consensus_val: "PoW SHA-256",
    spec_consensus_desc: "Madencilikle güvenceye alınan sağlam kriptografik ağ.",
    footer_text: "© 2026 Kurtcoin (KURT) Network. MIT Lisansı ile açık kaynak olarak dağıtılmaktadır.",

    // Wallet UI & Sidebar
    wallet_title: "KURTCOIN CÜZDAN",
    wallet_desc: "Kurtcoin Katman-1 Mobil & Web Cüzdanı. Tarayıcınız doğrudan küresel P2P ağına bağlanır.",
    btn_new_wallet: "✨ Yeni Cüzdan Oluştur",
    btn_import_wallet: "🔑 Özel Anahtarla Aç",
    sidebar_overview: "📊 Genel Bakış",
    sidebar_send: "📤 Transfer Gönder",
    sidebar_receive: "📥 Bakiye Al",
    sidebar_backup: "🔒 Anahtar Yedekle",
    sidebar_explorer: "🔍 KurtScan Gezgini",
    sidebar_logout: "🚪 Cüzdandan Çık",
    sidebar_p2p_status: "Canlı",
    sidebar_network_sub: "Kurtcoin Küresel Ağ",
    topbar_title: "Cüzdan & Madenci",
    label_avail_balance: "Kullanılabilir Bakiye",
    label_live_p2p: "⚡ Canlı P2P Blokzincir",
    btn_receive_qr: "📥 Bakiye Al (QR)",
    miner_title: "Madenci",
    miner_stopped: "DURDURULDU",
    miner_running: "KAZILIYOR",
    miner_hashrate: "Hash Gücü",
    miner_total_blocks: "Toplam Blok",
    miner_found_blocks: "Kazdığınız",
    btn_start_miner: "▶️ Madenciliği Başlat",
    btn_stop_miner: "⏹️ Durdur",
    action_send: "📤 Gönder",
    action_receive: "📥 Bakiye Al",
    action_backup: "🔑 Gizli Anahtarım",
    feed_title: "🌐 Küresel Canlı Blok Akışı",
    feed_synced: "● Canlı Senkron",

    // Wallet Mobile Bottom Nav
    mob_panel: "Panel",
    mob_send: "Gönder",
    mob_receive: "Al",
    mob_mine: "Kazım",
    mob_key: "Anahtar",
    mob_logout: "Çıkış",

    // Modals
    modal_send_title: "📤 Canlı P2P Transfer",
    modal_send_addr_label: "Alıcı Kurtcoin Adresi:",
    modal_send_addr_ph: "Örn: 14FTsfBTzSBP...",
    modal_send_amt_label: "Miktar (KURT):",
    modal_send_btn: "Gönder",
    modal_close: "Kapat",
    modal_cancel: "İptal",

    modal_receive_title: "📥 Bakiye Alma Adresiniz",
    modal_copy_addr_btn: "Adresi Kopyala",

    modal_backup_title: "🔒 Özel Anahtarınız",
    modal_backup_warn: "⚠️ UYARI: Bu anahtarı kimseyle paylaşmayın!",
    modal_copy_key_btn: "Kopyala",

    modal_import_title: "🔑 Cüzdan İçe Aktar",
    modal_import_key_label: "Özel Anahtarınızı (WIF) Yapıştırın:",
    modal_import_key_ph: "Örn: Kx85UkARHT41...",
    modal_open_wallet_btn: "Cüzdanı Aç",

    // Explorer Headers & Tags
    exp_hero_title: "KURTCOIN BLOK GEZGİNİ",
    exp_hero_desc: "Kurtcoin Katman-1 Blokzincirindeki tüm blokları, adresleri ve canlı işlemleri gerçek zamanlı keşfedin.",
    exp_search_placeholder: "Kurtcoin Adresi (1...), Blok # veya İşlem (Tx) Hash yapıştırın...",
    exp_search_btn: "🔍 Keşfet",
    exp_stat_height: "Toplam Blok Yüksekliği",
    exp_stat_supply: "Maksimum Arz",
    exp_stat_time: "Blok Süresi",
    exp_stat_wallets: "Toplam Cüzdan / Sahip",
    exp_stat_wallets_sub: "Aktif Blokzincir Cüzdanı",
    exp_stat_status: "Ağ & P2P Durumu",
    exp_stat_live: "● CANLI AĞ",
    exp_pow_badge: "PoW Çift SHA-256",
    exp_p2p_badge: "P2P Doğrudan İşlemler",
    exp_blocks_title: "📦 Son Kazılan Bloklar",
    exp_txs_title: "💸 Son Canlı Transferler",
    exp_modal_close: "Pencereyi Kapat",
    exp_no_txs: "Henüz yeni transfer işlemi bulunmuyor.",
    exp_miner_label: "Madenci",
    exp_time_today: "Bugün",
    exp_time_justnow: "Az önce",

    // Explorer Modal Dynamic Detail Texts
    exp_modal_addr_title: "🐺 Kurtcoin Cüzdan Adresi Detayı",
    exp_modal_addr_label: "Adres:",
    exp_modal_bal_label: "Kullanılabilir Bakiye:",
    exp_modal_founder_tag: " (⭐ Kurucu Madenci)",
    exp_modal_layer_label: "Ağ Katmanı:",
    exp_modal_layer_val: "Kurtcoin Katman-1 Mainnet (P2P 9333)",
    exp_modal_status_label: "Doğrulama Durumu:",
    exp_modal_status_val: "✓ Onaylanmış & Doğrulanmış",

    exp_modal_block_title: "📦 Blok Detayı & Header",
    exp_modal_height_label: "Blok Yüksekliği:",
    exp_modal_hash_label: "Blok Hash:",
    exp_modal_miner_label: "Madenci (Kazıcı):",
    exp_modal_reward_label: "Blok Ödülü:",
    exp_modal_consensus_label: "Konsensüs:",
    exp_modal_consensus_val: "PoW Çift SHA-256 (Zorluk: 0000)",
    exp_modal_confirm_label: "Onay Durumu:",
    exp_modal_confirm_val: "✓ Tam Doğrulandı",

    exp_modal_tx_title: "💸 Katman-1 İşlem (Tx) Kaydı",
    exp_modal_txid_label: "İşlem Hash (TxID):",
    exp_modal_from_label: "Gönderen:",
    exp_modal_to_label: "Alıcı:",
    exp_modal_amt_label: "Transfer Miktarı:",
    exp_modal_txtype_label: "İşlem Tipi:",
    exp_modal_txtype_val: "Katman-1 P2P Transfer",
    exp_modal_txconfirm_label: "Ağ Onayı:",
    exp_modal_txconfirm_val: "✓ Blokzincire Mühürlendi"
  },
  en: {
    // Nav & Common
    nav_about: "About",
    nav_specs: "Features",
    nav_explorer: "KurtScan Explorer",
    nav_whitepaper: "Whitepaper",
    nav_wallet: "Web Wallet",
    nav_wallet_enter: "⚡ Launch Wallet",
    nav_home: "Home",

    // Index Hero
    hero_badge: "🔥 LAYER-1 BLOCKCHAIN",
    hero_title: "THE WOLFPACK AWAKENS",
    hero_desc: "Kurtcoin (KURT) is a next-generation independent cryptocurrency protocol built on Bitcoin's proven security, offering 10x faster block confirmation times and a fair 100M supply centered around community power.",
    btn_create_wallet: "💳 Create / Open Wallet",
    btn_download_node: "📦 Download Node (Release)",
    btn_read_whitepaper: "Read Whitepaper",

    // Specs
    specs_title: "🐺 TECHNICAL SPECIFICATIONS",
    spec_supply_label: "Total Supply",
    spec_supply_val: "100,000,000",
    spec_supply_desc: "Fixed and non-inflationary maximum token supply.",
    spec_blocktime_label: "Block Time",
    spec_blocktime_val: "1 Minute",
    spec_blocktime_desc: "10x faster transaction confirmations compared to Bitcoin.",
    spec_genesis_label: "Genesis Reward",
    spec_genesis_val: "50 KURT",
    spec_genesis_desc: "Founder block reward created in block zero.",
    spec_consensus_label: "Consensus",
    spec_consensus_val: "PoW SHA-256",
    spec_consensus_desc: "Robust cryptographic network secured by proof-of-work.",
    footer_text: "© 2026 Kurtcoin (KURT) Network. Released as open source under the MIT License.",

    // Wallet UI & Sidebar
    wallet_title: "KURTCOIN WALLET",
    wallet_desc: "Kurtcoin Layer-1 Mobile & Web Wallet. Your browser connects directly to the global P2P mesh network.",
    btn_new_wallet: "✨ Create New Wallet",
    btn_import_wallet: "🔑 Import Private Key",
    sidebar_overview: "📊 Overview",
    sidebar_send: "📤 Send Transfer",
    sidebar_receive: "📥 Receive Balance",
    sidebar_backup: "🔒 Backup Key",
    sidebar_explorer: "🔍 KurtScan Explorer",
    sidebar_logout: "🚪 Log Out",
    sidebar_p2p_status: "Live",
    sidebar_network_sub: "Kurtcoin Global Network",
    topbar_title: "Wallet & Miner",
    label_avail_balance: "Available Balance",
    label_live_p2p: "⚡ Live P2P Blockchain",
    btn_receive_qr: "📥 Receive (QR)",
    miner_title: "Miner",
    miner_stopped: "STOPPED",
    miner_running: "MINING",
    miner_hashrate: "Hashrate",
    miner_total_blocks: "Total Blocks",
    miner_found_blocks: "Mined by You",
    btn_start_miner: "▶️ Start Mining",
    btn_stop_miner: "⏹️ Stop",
    action_send: "📤 Send",
    action_receive: "📥 Receive",
    action_backup: "🔑 My Private Key",
    feed_title: "🌐 Global Live Block Feed",
    feed_synced: "● Live Synced",

    // Wallet Mobile Bottom Nav
    mob_panel: "Dashboard",
    mob_send: "Send",
    mob_receive: "Receive",
    mob_mine: "Mining",
    mob_key: "Key",
    mob_logout: "Logout",

    // Modals
    modal_send_title: "📤 Live P2P Transfer",
    modal_send_addr_label: "Recipient Kurtcoin Address:",
    modal_send_addr_ph: "e.g. 14FTsfBTzSBP...",
    modal_send_amt_label: "Amount (KURT):",
    modal_send_btn: "Send",
    modal_close: "Close",
    modal_cancel: "Cancel",

    modal_receive_title: "📥 Your Receiving Address",
    modal_copy_addr_btn: "Copy Address",

    modal_backup_title: "🔒 Your Private Key",
    modal_backup_warn: "⚠️ WARNING: Never share this key with anyone!",
    modal_copy_key_btn: "Copy Key",

    modal_import_title: "🔑 Import Wallet",
    modal_import_key_label: "Paste Your Private Key (WIF):",
    modal_import_key_ph: "e.g. Kx85UkARHT41...",
    modal_open_wallet_btn: "Unlock Wallet",

    // Explorer Headers & Tags
    exp_hero_title: "KURTCOIN BLOCK EXPLORER",
    exp_hero_desc: "Explore all blocks, addresses, and live transactions on the Kurtcoin Layer-1 blockchain in real time.",
    exp_search_placeholder: "Paste Kurtcoin Address (1...), Block # or Tx Hash...",
    exp_search_btn: "🔍 Explore",
    exp_stat_height: "Total Block Height",
    exp_stat_supply: "Max Supply",
    exp_stat_time: "Block Time",
    exp_stat_wallets: "Total Wallets / Holders",
    exp_stat_wallets_sub: "Active Blockchain Wallets",
    exp_stat_status: "Network & P2P Status",
    exp_stat_live: "● LIVE MAINNET",
    exp_pow_badge: "PoW Dual SHA-256",
    exp_p2p_badge: "P2P Direct Transactions",
    exp_blocks_title: "📦 Latest Mined Blocks",
    exp_txs_title: "💸 Latest Live Transfers",
    exp_modal_close: "Close Window",
    exp_no_txs: "No recent live transactions yet.",
    exp_miner_label: "Miner",
    exp_time_today: "Today",
    exp_time_justnow: "Just now",

    // Explorer Modal Dynamic Detail Texts
    exp_modal_addr_title: "🐺 Kurtcoin Wallet Address Details",
    exp_modal_addr_label: "Address:",
    exp_modal_bal_label: "Available Balance:",
    exp_modal_founder_tag: " (⭐ Founder Miner)",
    exp_modal_layer_label: "Network Layer:",
    exp_modal_layer_val: "Kurtcoin Layer-1 Mainnet (P2P 9333)",
    exp_modal_status_label: "Verification Status:",
    exp_modal_status_val: "✓ Confirmed & Verified",

    exp_modal_block_title: "📦 Block Details & Header",
    exp_modal_height_label: "Block Height:",
    exp_modal_hash_label: "Block Hash:",
    exp_modal_miner_label: "Miner (Validator):",
    exp_modal_reward_label: "Block Reward:",
    exp_modal_consensus_label: "Consensus:",
    exp_modal_consensus_val: "PoW Dual SHA-256 (Diff: 0000)",
    exp_modal_confirm_label: "Confirmation Status:",
    exp_modal_confirm_val: "✓ Fully Verified",

    exp_modal_tx_title: "💸 Layer-1 Transaction (Tx) Record",
    exp_modal_txid_label: "Tx Hash (TxID):",
    exp_modal_from_label: "Sender:",
    exp_modal_to_label: "Recipient:",
    exp_modal_amt_label: "Transfer Amount:",
    exp_modal_txtype_label: "Transaction Type:",
    exp_modal_txtype_val: "Layer-1 P2P Transfer",
    exp_modal_txconfirm_label: "Network Confirmation:",
    exp_modal_txconfirm_val: "✓ Sealed on Blockchain"
  }
};

function getSystemLanguage() {
  const savedLang = localStorage.getItem('kurtcoin_user_lang');
  if (savedLang === 'tr' || savedLang === 'en') return savedLang;
  const navLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if (navLang.startsWith('tr')) return 'tr';
  return 'en';
}

let currentLang = getSystemLanguage();

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('kurtcoin_user_lang', lang);
  applyTranslations();
  document.querySelectorAll('[id^="langToggleBtn"]').forEach(btn => {
    btn.innerText = currentLang === 'tr' ? '🇹🇷 TR' : '🇬🇧 EN';
  });
  // Sayfa özel render fonksiyonları varsa tetikle
  if (typeof renderBlocks === 'function') renderBlocks();
  if (typeof renderTxs === 'function') renderTxs();
  if (typeof renderFeed === 'function') renderFeed();
}

function toggleLanguage() {
  setLanguage(currentLang === 'tr' ? 'en' : 'tr');
}

function t(key) {
  const dict = KURT_TRANSLATIONS[currentLang] || KURT_TRANSLATIONS.en;
  return dict[key] || key;
}

function applyTranslations() {
  const dict = KURT_TRANSLATIONS[currentLang] || KURT_TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        el.innerText = dict[key];
      }
    }
  });
}
