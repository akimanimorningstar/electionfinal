const Tally = artifacts.require("./Tally.sol");

module.exports = function(deployer) {
  deployer.deploy(Tally);
};
