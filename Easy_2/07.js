/*
In this exercise, you will write a function named xor that takes two
arguments, and returns true if exactly one of its arguments is truthy,
false otherwise. Note that we are looking for a boolean result instead
of a truthy/falsy value as returned by || and &&.

input: two values
output: boolean

algorithm

- Transform inputs to booleans
- If both are equal return false
- Else return true
*/

const xor = (elem1, elem2) => !!elem1 !== !!elem2;


console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);