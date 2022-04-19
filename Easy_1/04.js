/*
Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

input: two numbers length and width
output: two numbers one in meters and one in feet

algorithm

-Ask the length in meters
-Ask the width in meters
-Compute the area length * width and save to metersArea
-Compute the area in feet => metersArea * 10.7639 and seva to 
feetArea
-Print the result on the console
*/

let readline = require("readline-sync");

let length = readline.question("Enter the length of the room in meters: ");
let width = readline.question("Enter the width of the room in meters: ");

let FEET_IN_SQUARE_METER = 10.7639;
let metersArea = Number(length) * Number(width);
let feetArea = metersArea * FEET_IN_SQUARE_METER;

console.log(`The area of the room is ${metersArea.toFixed(2)} square meters (${feetArea.toFixed(2)} square feet).`);