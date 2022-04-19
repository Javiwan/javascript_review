/*
Create a simple tip calculator. The program should prompt for
a bill amount and a tip rate. The program must compute the tip,
and then log both the tip and the total amount of the bill to the
console. You can ignore input validation and assume that the user
will enter numbers.

Example

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

Inputs: Two numbers, one with the bill and one with the percentage
Output: Two strings one with the tip and one with the total

algorithm

- Ask the user for the bill (transform to number)
- Ask the user for the percentage (transform to number)
- Initialize a variable with the value of the tip (percentage / 100) * bill
- Initialize a variable with the total value (bill + tip)
- Print in console the tip
- Print in console the total
*/

let readline = require('readline-sync');

function checkEntry(num) {
  while (Number.isNaN(num)) {
    num = Number(readline.question('Please enter a valid number '));
  }
  return num;
}

let bill = Number(readline.question('What is the bill? '));
bill = checkEntry(bill);

let percentage = Number(readline.question('What is the tip percentage? '));
percentage = checkEntry(percentage);

let tip = (percentage / 100) * bill;
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);