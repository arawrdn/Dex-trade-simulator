# 📊 DEX Trade Simulator

A simple on-chain trading simulator with ERC20 tokens and a basic AMM.  
Built with **Solidity**, **Hardhat**, and a minimal **React frontend**.

---

## 🚀 Features
- Deploy two dummy ERC20 tokens.
- Provide liquidity into a simple AMM pool.
- Swap between tokens using constant product formula.
- Run locally with Hardhat + frontend.

---

## 🛠 Installation
```bash
git clone https://github.com/username/dex-trade-simulator.git
cd dex-trade-simulator

npm install

npx hardhat compile

npx hardhat test

npx hardhat run scripts/deploy.js --network localhost

▶️ Frontend

Go to frontend/ folder:

cd frontend
npm install
npm start

📌 Notes

This is a learning project, not production-ready.
The DEX uses a simplified AMM model without fees/slippage.


