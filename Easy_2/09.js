/*
Write a function that takes a string of digits and returns the appropriate number 
as an integer. You may not use any of the methods mentioned above.

input: string
output: number

algorithm

- Create an object with values pairs '1' => 1, '2' => 2 ...
- Transform the string in array
- Iterate over the array and use the object to transform string
character to numbers
- Return the new array joined
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

/*
const stringToInteger = (str) => {
  let newArr = str.split('').map( char => strToNum[char]);
  let newArrLength = newArr.length;
  let result = 0;
  let count = 0;
  for (let idx = newArrLength - 1; idx >= 0; idx -= 1 ) {
    result += newArr[count] * (10 ** idx);
    count += 1;
  }
  return result;
};
*/

//Better way

const stringToInteger = (str) => str.split('').map( char => strToNum[char]).reduce((acc, num) => (acc * 10) + num, 0);

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true