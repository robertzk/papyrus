require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    test: {
      host: "0.0.0.0",
      port: 8545,
      network_id: "*",
      gas: 4700000,
      gasPrice: 0
    }
  }
}


