const { expect } = require("chai");

describe("Dex", function () {
  let Token, Dex, tokenA, tokenB, dex, owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();

    Token = await ethers.getContractFactory("Token");
    tokenA = await Token.deploy("TokenA", "TKA", 1000000);
    tokenB = await Token.deploy("TokenB", "TKB", 1000000);

    Dex = await ethers.getContractFactory("Dex");
    dex = await Dex.deploy(tokenA.address, tokenB.address);

    await tokenA.approve(dex.address, 5000);
    await tokenB.approve(dex.address, 5000);
    await dex.addLiquidity(1000, 1000);
  });

  it("should allow swapping TokenA for TokenB", async function () {
    await tokenA.approve(dex.address, 100);
    await dex.swap(100, true);

    const balanceB = await tokenB.balanceOf(owner.address);
    expect(balanceB).to.be.gt(0);
  });
});
