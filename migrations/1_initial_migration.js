var Migrations = artifacts.require("./Migrations.sol");
var SpringEscrow = artifacts.require("./SpringEscrow.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(SpringEscrow);
};
