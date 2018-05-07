pragma solidity ^0.4.23; //We have to specify what version of compiler this code will use

import './StandardToken.sol';
import '../lib/Ownable.sol';
import '../lib/SafeMath.sol';

contract SpringCoin is StandardToken, Ownable {
  using SafeMath for uint256;

  /* Public variables of the token */
  string public name = "SpringCoin";
  uint8 public decimals = 18;
  string public symbol = "SPNG";
  uint256 public totalSupply = 1000000000000000000000000000;

  uint256 public rateETH = 10;

  event TokenPurchaseEvent(address sender, uint256 amount);

  constructor() public {
    balances[owner] = totalSupply;
  }

  function () public payable {
    // if ether is sent to this address, send it back.
    revert();
  }

  function buyToken() public payable {
    require(msg.value >= 0);
    uint256 tokenAmount = msg.value * rateETH;

    balances[owner] = balances[owner].sub(tokenAmount);
    balances[msg.sender] = balances[owner].add(tokenAmount);
    emit TokenPurchaseEvent(msg.sender, balances[msg.sender]);
  }

  function transfer(address _to, uint256 _value) public returns (bool)
  {
    return super.transfer(_to, _value);
  }

  function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
    return super.transferFrom(_from, _to, _value);
  }
}
