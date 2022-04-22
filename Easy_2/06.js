/*
Write a function that returns the next to last word in the String
passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least
two words.

input: string
output: string

algorithm

-Get the input and split with ' '
-Return the element of the array at position arr.length-2
*/

const penultimate = str => {
  let strArr = str.split(' ');
  return strArr[strArr.length - 2];
};

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

/*
Suppose we need a function that retrieves the middle word of a
phrase/sentence. What edge cases need to be considered? How would
you handle those edge cases without ignoring them? Write a function
that returns the middle word of a phrase or sentence. It should
handle all of the edge cases you thought of.

algorithm

- Split the string with ' '
- Check string length
  - If only one word return the word 
  -If no words return empty string
  - If its even the word will be at possition (string.length / 2) -1 and
  (string.length/2)
  - If its odd the word will be at possition (string.length/2) 
*/

const findMiddle = (str) => {
  let strArr = str.split(' ');
  let strLength = strArr.length;
  if (strLength === 1) {
    return str;
  } else if ( str.trim().length === 0) {
    return ' ';
  }

  if (strLength % 2 === 0) {
    return strArr[(strLength / 2) - 1] + ' ' + strArr[strLength / 2];
  } else {
    return strArr[Math.floor(strLength / 2)];
  }
};

console.log(findMiddle('hello'));
console.log(findMiddle(''));
console.log(findMiddle('    '));
console.log(findMiddle('Launch School is nice'));
console.log(findMiddle('Launch School'));
console.log(findMiddle('You are welcome'));



