# Papyrus

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
1) npm install -g truffle
2) run seth with -rpc

```

### Installing

Create a truffle.js at the root of /papyrus with the content :

```
  module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
      sopsten: {
        host: "127.0.0.1",
        port: 8545,
        network_id: "59675", // Match any network id
        from: ADDRESS, // default address to use for any transaction Truffle makes during migrations
        gas: 4700000,
      },
    }
  };

```

Compile & Migratione contracts into Sopsten Network

```
truffle migrate --reset --network=sopsten
```


## Running the tests

```
truffle test --network=sopsten
```
