import expectThrow from './helpers/expectThrow'

const AttestationRegistry = artifacts.require('./AttestationRegistry.sol')

const Web3Beta = require('web3')
const web3 = new Web3Beta(new Web3Beta.providers.HttpProvider("http://localhost:8545"))

const AttestationTypeEnum = {
  PHONE: 0,
  ADDRESS: 1,
  CREDIT_SCORE: 2
}
const NB_EXTRA_SALT = 10

contract('AttestationRegistry', (accounts) => {
  const coinbase = accounts[0]
  let instance

  beforeEach(`create subject instance before each test`, async () => {
    instance = await AttestationRegistry.deployed()
  })

  it("should succesfully create a new attestation in the registry", async () => {
    // Osiris Parameters
    const customerSpringId = "0xc257274276a4e539741ca11b590b9447b26a8051"
    const dataProviderSpringId = "0x5521a68d4f8253fc44bfb1490249369b3e299a4a"

    const salt = web3.utils.randomHex(16)
    const datum = "3244568830" + web3.utils.randomHex(NB_EXTRA_SALT).substr(2)
    const data = {"verified": true}

    // Generation of Hash
    const customerSpringHash = web3.utils.sha3(customerSpringId, dataProviderSpringId, AttestationTypeEnum.PHONE)
    const attestationHash = web3.utils.sha3(datum, data, salt)

    const transactionReceipt = await instance.createAttestation(customerSpringHash, attestationHash, {value: web3.utils.toWei("2", 'ether')})

    assert.equal(transactionReceipt.logs[0].event, 'AttestationCreationLog2', 'Attestation Creation event is emitted')
    assert.equal(transactionReceipt.logs[0].args.customerId, customerSpringHash, 'customerId == customerSpringHash')
    assert.equal(transactionReceipt.logs[0].args.attestationVerification, attestationHash, 'attestationVerification == attestationHash')
  })

  it("should fail to create a new attestation in the registry because of not sending enough funds", async () => {
    // Osiris Parameters
    const customerSpringId = "0xc257274276a4e539741ca11b590b9447b26a8051"
    const dataProviderSpringId = "0x5521a68d4f8253fc44bfb1490249369b3e299a4a"

    const salt = web3.utils.randomHex(16)
    const datum = "3244568830" + web3.utils.randomHex(NB_EXTRA_SALT).substr(2)
    const data = {"verified": true}

    // Generation of Hash
    const customerSpringHash = web3.utils.sha3(customerSpringId, dataProviderSpringId, AttestationTypeEnum.PHONE)
    const attestationHash = web3.utils.sha3(datum, data, salt)

    await expectThrow(instance.createAttestation(customerSpringHash, attestationHash, {value: web3.utils.toWei("0.1", 'ether')}))
  })
})
