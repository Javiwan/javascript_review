/*
Write a program that asks the user to enter an integer greater
than 0, then asks whether the user wants to determine the sum or
the product of all numbers between 1 and the entered integer, inclusive.

Examples

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.

Input: An integer greater than 0
Output: A string

Algorithm

- Ask the user for a number greater than zero
- Check if the number is greater than zero
  - If is not greater, ask agai for a number greater than zero
  - If is greater than zero,
    - Ask the user if he wants sum or product
      -If sum
        - Loop over all number between 0 and the given number
        - Add each number to the last one
        - Return the result
      -If product
        - Loop over all number between 0 and the given number
        - Multiply each number to the last one
        - Return the result
    - Log in the screen the result of the operation choosen
*/

let readline = require('readline-sync');

function checkNumber(num) {
  while (num <= 0 || Number.isNaN(num)) {
    num = Number(readline.question ('Please enter an integer greater than 0: '));
  }
  return num;
}

function checkAnswer(str) {
  while (!str.match(/[sp]/i)) {
    str = readline.question('Enter "s" to compute the sum or "p" to compute the product: ');
  }
  return str;
}

function computeSum(num) {
  let total = 0;
  for (let idx = 1; idx <= num; idx += 1 ) {
    total += idx;
  }
  return `The sum of the integers between 1 and ${num} is ${total}.`;
}

function computeProduct(num) {
  let total = 1;
  for (let idx = 1; idx <= num; idx += 1 ) {
    total *= idx;
  }
  return `The product of the integers between 1 and ${num} is ${total}.`;
}

let number = checkNumber(Number(readline.question ('Please enter an integer greater than 0: ')));

let answer = checkAnswer(readline.question('Enter "s" to compute the sum or "p" to compute the product: '));

if (answer.match(/[s]/i)) {
  console.log(computeSum(number));
} else {
  console.log(computeProduct(number));
}