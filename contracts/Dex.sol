// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Dex {
    IERC20 public token1;
    IERC20 public token2;

    uint256 public reserve1;
    uint256 public reserve2;

    constructor(address _token1, address _token2) {
        token1 = IERC20(_token1);
        token2 = IERC20(_token2);
    }

    function addLiquidity(uint256 amount1, uint256 amount2) external {
        require(amount1 > 0 && amount2 > 0, "Invalid amounts");

        token1.transferFrom(msg.sender, address(this), amount1);
        token2.transferFrom(msg.sender, address(this), amount2);

        reserve1 += amount1;
        reserve2 += amount2;
    }

    function getPrice(uint256 inputAmount, bool fromToken1) public view returns (uint256) {
        if (fromToken1) {
            return (inputAmount * reserve2) / (reserve1 + inputAmount);
        } else {
            return (inputAmount * reserve1) / (reserve2 + inputAmount);
        }
    }

    function swap(uint256 inputAmount, bool fromToken1) external {
        require(inputAmount > 0, "Invalid input");

        if (fromToken1) {
            uint256 output = getPrice(inputAmount, true);
            token1.transferFrom(msg.sender, address(this), inputAmount);
            token2.transfer(msg.sender, output);
            reserve1 += inputAmount;
            reserve2 -= output;
        } else {
            uint256 output = getPrice(inputAmount, false);
            token2.transferFrom(msg.sender, address(this), inputAmount);
            token1.transfer(msg.sender, output);
            reserve2 += inputAmount;
            reserve1 -= output;
        }
    }
}
