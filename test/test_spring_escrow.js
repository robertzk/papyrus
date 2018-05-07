const SpringEscrow = artifacts.require("./SpringEscrow.sol")

const Web3Beta = require('web3')
const web3 = new Web3Beta(new Web3Beta.providers.HttpProvider("http://localhost:8545"))

const PRIVATE_KEY="0x789610cb2d3bd970aadc1f9fb119f85ebdc25a0cecbdd86d9af28901c12b98ae"

contract('SpringEscrow', (accounts) => {
  const coinbase = accounts[0]
  let instance

  beforeEach(`create subject instance before each test`, async () => {
    instance = await SpringEscrow.deployed();
  });

  // ----------------------------------------------------------------------
  // --------------  Initialization of Escrow Contract --------------------
  // ----------------------------------------------------------------------

  it("should verify signer's signature", async () => {
    const msg = 'Hello World'
    const data = "\x19Ethereum Signed Message:\n" + msg.length + msg
    var signature = web3.eth.accounts.sign(data, PRIVATE_KEY)
    const signerAddress = await instance.verifySignature(signature.messageHash, signature.v, signature.r, signature.s)
    assert.equal(signerAddress, coinbase, "Address of signer should be equal to sender's account")
  })
});
