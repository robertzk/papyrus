pragma solidity ^0.4.23;

contract AttestationRegistry {
  mapping(bytes32 => bytes32) attestations;
  uint256 price = 1000000000000000000;

  event AttestationCreationLog(bytes32 customerId, bytes32 attestationVerification);

  /**
   * @dev Modifier to ensure that a user has sent enough funds
   */
  modifier enoughFund() {
    require(msg.value >= price);
    _;
  }

  /**
   * @dev Creation of new attestation in the registry by Data Providers
   * @param _customerId [Hash of customerId related to that specific attestation = SHA256(customer_spring_id, attestation_type, dataprovider_spring_id)]
   * @param _attestationVerification [Hash of the data for verification = SHA256(datum+SALT, data, SALT)]
   */
  function createAttestation(bytes32 _customerId, bytes32 _attestationVerification) payable enoughFund public {
    attestations[_customerId] = _attestationVerification;
    emit AttestationCreationLog(_customerId, _attestationVerification);
  }

  /**
   * @dev Function to set the price to stake for any attestation creation
   * @param _price [Price in Wei required to create a new attestation]
   */
  function setPrice(uint256 _price) public {
    price = _price;
  }
}
