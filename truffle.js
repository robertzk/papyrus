module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    sopsten: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "59675", // Match any network id
      from: "0x1fa414ff91e916178b1746a0ad59ef0752e25824", // default address to use for any transaction Truffle makes during migrations
      gas: 4700000,
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      gas: 4700000,
      network_id: "*", // Match any network id
    }
  }
};
