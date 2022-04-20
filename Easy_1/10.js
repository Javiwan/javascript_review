/*
Write a function that computes the sum of all numbers between
1 and some other number, inclusive, that are multiples of 3 or 5.
For instance, if the supplied number is 20, the result should be
98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

input: number
output: number

algorithm

- Initialize a variable called sum
- Iterate over the numbers from 1 to the given number
  - If the number is divisible by 3 or 5 add it to sum
- Return the final value of sum
*/

const multisum = (num) => {
  let sum = 0;
  for (let idx = 1; idx <= num; idx += 1) {
    if ((idx % 3 === 0) || (idx % 5 === 0)) {
      sum += idx;
    }
  }
  return sum;
};

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168