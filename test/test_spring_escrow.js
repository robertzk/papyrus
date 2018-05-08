const SpringEscrow = artifacts.require("./SpringEscrow.sol")

const Web3Beta = require('web3')
const web3 = new Web3Beta(new Web3Beta.providers.HttpProvider("http://localhost:8545"))

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

    var hashMsg = web3.utils.sha3(msg)
    var signature = await web3.eth.sign(hashMsg, coinbase)

    signature = signature.substr(2, signature.length)
    const r = '0x' + signature.substr(0, 64)
    const s = '0x' + signature.substr(64, 128)
    const v = web3.utils.toDecimal('0x' + signature.substr(128, 130)) + 27

    const signerAddress = await instance.verifySignature(hashMsg, v, r, s)

    assert.equal(signerAddress, coinbase, "Address of signer should be equal to sender's account")
  })
});
