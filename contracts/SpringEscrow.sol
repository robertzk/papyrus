pragma solidity ^0.4.23;

contract SpringEscrow {

  function verifySignature(bytes32 _message, uint8 _v, bytes32 _r, bytes32 _s) view returns (address) {
    address signer = ecrecover(_message, _v, _r, _s);
    return signer;
  }
}
