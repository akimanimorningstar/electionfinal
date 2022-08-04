require('dotenv').config()
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MNEMONIC =  process.env.MNEMONIC
const API_URL = process.env.API_URL

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    rinkbey: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, API_URL)
      },
      network_id:44787,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
 timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },
};
