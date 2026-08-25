# 🐺 Kurtcoin (KURT)

<p align="center">
  <strong>"The Pack is United. Decentralized, Fast and Built for the Community."</strong>
</p>

---

## 🌟 About Kurtcoin

**Kurtcoin (KURT)** is an independent, decentralized, peer-to-peer Layer-1 cryptocurrency forked from the battle-tested Bitcoin Core architecture. Designed with modern transaction speeds and community governance in mind, Kurtcoin embodies loyalty, freedom, and the unstoppable power of the wolfpack.

---

## 🚀 Key Specifications

| Parameter | Specification |
| :--- | :--- |
| **Coin Name** | Kurtcoin |
| **Ticker** | `KURT` |
| **Total Supply** | `100,000,000 KURT` |
| **Block Time** | `1 Minute (60 Seconds)` (10x faster than Bitcoin) |
| **Genesis Reward** | `50 KURT` |
| **P2P Port** | `9333` |
| **Magic Network Bytes** | `0x4B 0x55 0x52 0x54 ('KURT')` |
| **Consensus Algorithm** | Proof-of-Work (SHA-256) |

---

## 📜 Genesis Block Information

* **Genesis Message:**  
  `"Kurtcoin 2026: The Wolfpack Awakens - Loyalty, Freedom and Decentralization"`
* **Genesis Hash:**  
  `00000ad4b509810ffa3bb36aa5071e885a34ca424d94820b44bb0c3d589364dc`
* **Genesis Beneficiary Address:**  
  `14FTsfBTzSBP9Zm9W65W1YNUEYhXJ3t6PA`

---

## ⛏️ How to Mine Kurtcoin ($KURT)

Kurtcoin supports dual mining methods for global decentralization:

### 1. 🌐 Instant Web Browser Mining (Zero-Install)
Anyone in the world can mine $KURT directly from their mobile or desktop browser without downloading any software:
1. Open the [Kurtcoin Web Wallet](https://kurtcoin.github.io/kurtcoin/wallet.html).
2. Create or import your wallet.
3. Click **"▶️ Start Mining"** to begin hashing blocks immediately.

### 2. 💻 Full Node & CPU/GPU Mining (From Release)
For maximum hashpower and dedicated nodes:
```bash
# 1. Start the Kurtcoin Node
./kurtcoind -daemon

# 2. Start Solo Mining with CLI
./kurtcoin-cli generatetoaddress 1 <YOUR_KURT_ADDRESS>
```

---

## 💻 Building from Source

### Dependencies
- GCC 11+ or Clang
- CMake 3.20+
- Boost C++ Libraries
- SQLite / Berkeley DB (for wallet support)

### Quick Build (Linux/macOS):
```bash
git clone https://github.com/kurtcoin/kurtcoin.git
cd kurtcoin
cmake -B build
cmake --build build
```

---

## 🌐 Official Web Portal & Live Explorer

* **Official Website:** [https://kurtcoin.github.io/kurtcoin/](https://kurtcoin.github.io/kurtcoin/)
* **Web Wallet & Browser Miner:** [https://kurtcoin.github.io/kurtcoin/wallet.html](https://kurtcoin.github.io/kurtcoin/wallet.html)
* **KurtScan Block Explorer:** [https://kurtcoin.github.io/kurtcoin/explorer.html](https://kurtcoin.github.io/kurtcoin/explorer.html)

---

## 🛡️ License
Kurtcoin is released under the terms of the MIT License.
