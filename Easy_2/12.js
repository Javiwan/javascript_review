/*
Write a function that takes an integer and converts it to a string
representation.
*/

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const integerToString = (num) => {
  let arr = [];
  let digit = 0;

  do {
    digit = num % 10;
    arr.push(DIGITS[digit]);
    num = (num - digit) / 10;
  } while (num > 0);

  return arr.reverse().join('');
};

function signedIntegerToString(num) {
  if (num > 0) {
    return '+' + integerToString(num) ;
  } else if (num < 0) {
    return '-' + integerToString(-num);
  } else {
    return integerToString(num);
  }
}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");