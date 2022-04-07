const { ethers, upgrades } = require("hardhat");

const PROXY = "0x4EEEf17Daf3fBF146dDdDf6941B952bb63bA1b37";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  await upgrades.upgradeProxy(PROXY, BoxV2);
  console.log("Box upgraded");
}

main();
