var HelloWorld = artifacts.require("./HelloWorld.sol");
var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(HelloWorld);
};
