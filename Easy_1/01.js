/*
Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

Input values ==> one positive, negative or zero integer
Output value ==> boolean value, 
                    true if the number is odd
                    false if not

Algorithm

- Get the absolute value of the number
- Check if the number is divisible by 2
    -If it is, return false
    -If its not, return true
*/

// function isOdd(num) {
//   return Math.abs(num) % 2 === 1;
// }

let isOdd = (num) => Math.abs(num) % 2 === 1;

// Examples
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true