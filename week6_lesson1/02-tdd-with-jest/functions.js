const dataTypeError = 'incorrect data type';

const addTwoNumbers = (num1, num2) =>
  [num1, num2].every((num) => typeof num === 'number')
    ? num1 + num2
    : dataTypeError;

const subtractTwoNumbers = (num1, num2) =>
  [num1, num2].every((num) => typeof num === 'number')
    ? num1 - num2
    : dataTypeError;

const notARoyalMemberError = 'That is not a member of the royal family';

const greetRoyalFamily = (name) => {
  switch (name) {
    case 'Elizabeth':
      return 'Hello Queen Elizabeth';
    case 'Philip':
      return 'Hello Prince Philip';
    case 'Charles':
      return 'Hello Prince Charles, Prince of Wales';
    case 'Anne':
      return 'Hello Princess Anne, hows it goin?';
    case 'Edward':
      return 'Hello Prince Edward';
    case 'Diana':
      return 'Hello Princess Diana';
    case 'Camilla':
      return 'Hello Camilla';
    case 'Catherine':
      return 'Hello Catherine';
    case 'Harry':
      return 'Hello Harry, hows America?';
    case 'William':
      return 'Hello William, hows Harry?';
    case 'Meghan':
      return 'Hello Meghan, hows Hollywood?';
    default:
      return notARoyalMemberError;
  }
};
    
const divisibleBy5 = (num) =>
    (num % 5 === 0 ? true:  false); 
    
const sortNumbersAscOrDesc = (arr, sortOrder) => {
  if (sortOrder === 'asc') {
    return arr.sort((a, b) => (a > b ? 1 : -1));
  }

  return arr.sort((a, b) => (a < b ? 1 : -1));
};

module.exports = {
  dataTypeError,
  notARoyalMemberError,
  addTwoNumbers,
  subtractTwoNumbers,
  greetRoyalFamily,
  divisibleBy5,
  sortNumbersAscOrDesc
};
