/*
Write a function that converts a non-negative integer value 
(e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

algorithm

- While num > 0
 - Take num % 10 and put into array
 - Subtract (num % 10) to number and divide by 10
- Return array reversed and joined
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


console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"