/*
Write a function that takes a string of digits and returns the appropriate
number as an integer. The string may have a leading + or - sign; if the first
character is a +, your function should return a positive number; if it is a -,
your function should return a negative number. If there is no sign, return a
positive number.

*/
const strToNum = {
  0 : 0,
  1 : 1,
  2 : 2,
  3 : 3,
  4 : 4,
  5 : 5,
  6 : 6,
  7 : 7,
  8 : 8,
  9 : 9
};

const stringToInteger = (str) => str.split('').map( char => strToNum[char]).reduce((acc, num) => (acc * 10) + num, 0);

const stringToSignedInteger = (str) => {
  if (str.startsWith('-')) {
    return stringToInteger(str.slice(1)) * -1;
  } else  if (str.startsWith('+')) {
    return stringToInteger(str.slice(1));
  } else {
    return stringToInteger(str);
  }
};

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true