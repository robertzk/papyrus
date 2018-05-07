const SpringEscrow = artifacts.require("./SpringEscrow.sol");
const AttestationRegistry = artifacts.require("./AttestationRegistry.sol");
const SpringCoin = artifacts.require("./token/SpringCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(SpringEscrow);
  deployer.deploy(SpringCoin).then(() => {
    return deployer.deploy(AttestationRegistry, SpringCoin.address);
  })
};
