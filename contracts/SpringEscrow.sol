pragma solidity ^0.4.23;

contract SpringEscrow {

  function verifySignature(bytes32 _hashMessage, uint8 _v, bytes32 _r, bytes32 _s) pure public returns (address) {
    bytes memory prefix = "\x19Ethereum Signed Message:\n32";
    bytes32 prefixedHash = keccak256(prefix, _hashMessage);
    address addr = ecrecover(prefixedHash, _v, _r, _s);

    return addr;
  }
}
