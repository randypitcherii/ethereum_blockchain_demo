var ScoreStore = artifacts.require("./ScoreStore.sol");
var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(ScoreStore);
};
