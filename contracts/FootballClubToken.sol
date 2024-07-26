// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FootballClubToken is ERC20, Ownable {
    mapping(address => uint256) public points;
    mapping(address => uint256) public rewards;

    event PointsAdded(address indexed member, uint256 points);
    event RewardAdded(address indexed member, uint256 reward);
    event TransferWithDescription(address indexed from, address indexed to, uint256 amount, string description);

    constructor(string memory name, string memory symbol) ERC20(name, symbol) Ownable(msg.sender) {
        // Ownable constructor will automatically set the deployer as the owner
    }

    function addPoints(address member, uint256 amount) external onlyOwner {
        points[member] += amount;
        emit PointsAdded(member, amount);
    }

    function addReward(address member, uint256 amount) external onlyOwner {
        rewards[member] += amount;
        emit RewardAdded(member, amount);
    }

    function transferWithDescription(address recipient, uint256 amount, string calldata description) external returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        emit TransferWithDescription(_msgSender(), recipient, amount, description);
        return true;
    }

    function getPoints(address member) external view returns (uint256) {
        return points[member];
    }

    function getRewards(address member) external view returns (uint256) {
        return rewards[member];
    }
}
