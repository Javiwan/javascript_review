/*
Write a function that takes two strings as arguments, determines
the length of the two strings, and then returns the result of
concatenating the shorter string, the longer string, and
the shorter string once again. You may assume that the
strings are of different lengths.

input: two strings
output: a string

algorithm

- Compare logitud of both words
  -If first is greate than second
    -Return second + first + second
  -Else
    -Return first + second + first
*/

// Normal way
/*
function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    return str2 + str1 + str2;
  } else {
    return str1 + str2 + str1;
  }
}

*/

// More interesting way
function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    [str1, str2] = [str2, str1]; // Array destructuring
  }
  return str1 + str2 + str1;
}


console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"