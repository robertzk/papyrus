pragma solidity ^0.4.23;

contract SpringEscrow {

  function verifySignature(bytes32 _message, uint8 _v, bytes32 _r, bytes32 _s) view returns (address) {
    bytes memory prefix = "\x19Ethereum Signed Message:\n32";
    bytes32 prefixedHash = sha3(prefix, _message);
    address signer = ecrecover(prefixedHash, _v, _r, _s);
    return signer;
  }
}
