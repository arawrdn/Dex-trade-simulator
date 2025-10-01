const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with account:", deployer.address);

  const Token = await hre.ethers.getContractFactory("Token");
  const tokenA = await Token.deploy("TokenA", "TKA", 1000000);
  const tokenB = await Token.deploy("TokenB", "TKB", 1000000);

  await tokenA.deployed();
  await tokenB.deployed();

  console.log("TokenA deployed to:", tokenA.address);
  console.log("TokenB deployed to:", tokenB.address);

  const Dex = await hre.ethers.getContractFactory("Dex");
  const dex = await Dex.deploy(tokenA.address, tokenB.address);
  await dex.deployed();

  console.log("Dex deployed to:", dex.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
