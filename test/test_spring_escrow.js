const SpringEscrow = artifacts.require("./SpringEscrow.sol");

contract('SpringEscrow', (accounts) => {
  let instance;

  beforeEach(`create subject instance before each test`, async () => {
    instance = await SpringEscrow.deployed();
  });

  // ----------------------------------------------------------------------
  // --------------  Initialization of Escrow Contract --------------------
  // ----------------------------------------------------------------------

  it("should verify signer's signature", async () => {
    const account = web3.eth.accounts[1]
    const msg = 'Hello World'

    const h = web3.sha3(msg)
    const sig = web3.eth.sign(web3.eth.accounts[1], h).slice(2)
    const r = `0x${sig.slice(0, 64)}`
    const s = `0x${sig.slice(64, 128)}`
    const v = web3.toDecimal(sig.slice(128, 130)) + 27
    const signerAddress = await instance.verifySignature(h, v, r, s)

    assert.equal(signerAddress, account, "Address of signer should be equal to sender's account")
  })
});
