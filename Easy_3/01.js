/*
Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

input: string
output: string

algorithm

- Transform the string to an array (strArr)
- Iterate over the array
  - If next element is different to current one, push element to finalArr
- Return finalArr joined
*/

const crunch = (str) => str
  .split('')
  .filter((char, idx, arr) => char !== arr[idx + 1])
  .join('');

// With Regex

const crunchRegex = (str) => {
  return str.replace(/(.)(?=\1)/g, '');
};

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

console.log(crunchRegex('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunchRegex('4444abcabccba'));              // "4abcabcba"
console.log(crunchRegex('ggggggggggggggg'));            // "g"
console.log(crunchRegex('a'));                          // "a"
console.log(crunchRegex(''));