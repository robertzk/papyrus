pragma solidity ^0.4.23;

contract ERC20Token {
  /**
   * @dev retrieve _owner balance
   * @param  _owner The address from which the balance will be retrieved
   * @return uint256 The balance
   */
  function balanceOf(address _owner) public view returns (uint256);

  /**
   * @dev send `_value` token to `_to` from `msg.sender`
   * @param  _to The address of the recipient
   * @param  _value The amount of token to be transferred
   * @return bool Whether the transfer was successful or not
   */
  function transfer(address _to, uint256 _value) public returns (bool);

  /**
   * @dev send `_value` token to `_to` from `_from` on the condition it is approved by `_from`
   * @param  _from The address of the sender
   * @param  _to The address of the recipient
   * @param  _value The amount of token to be transferred
   * @return bool Whether the transfer was successful or not
   */
  function transferFrom(address _from, address _to, uint256 _value) public returns (bool);

  /**
   * @dev `msg.sender` approves `_addr` to spend `_value` tokens
   * @param  _spender The address of the account able to transfer the tokens
   * @param  _value The amount of wei to be approved for transfer
   * @return bool Whether the approval was successful or not
   */
  function approve(address _spender, uint256 _value) public returns (bool);

  /**
   * @param  _owner The address of the account owning tokens
   * @param  _spender The address of the account able to transfer the tokens
   * @return uint256 Amount of remaining tokens allowed to spent
   */
  function allowance(address _owner, address _spender) public view returns (uint256);

  event Transfer(address indexed _from, address indexed _to, uint256 _value);
  event Approval(address indexed _owner, address indexed _spender, uint256 _value);
}
