/*
Write a program that will ask for user's name. The program
will then greet the user. If the user writes "name!" then the
computer yells back to the user.

input: string
output: string

algorithm

-Get the user name
-If name last character = ! return string in uppercase
-Else return normal string
*/

let readline = require('readline-sync');

let answer = readline.question('What is your name? ');

if (answer[answer.length - 1] === '!') {
  console.log(`HELLO ${answer.slice(0,-1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${answer}`);
}

