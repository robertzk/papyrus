var Migrations = artifacts.require("./Migrations.sol");
var SpringEscrow = artifacts.require("./SpringEscrow.sol");
var AttestationRegistry = artifacts.require("./AttestationRegistry.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(SpringEscrow);
  deployer.deploy(AttestationRegistry);
};
