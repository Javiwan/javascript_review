/*
This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap
year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar,
leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to
determine leap years both before and after 1752.

algorithm
- If number is divisible by 4 and number is less than 1752 return true
*/

function isLeapYear(num) {

  if ((num < 1752) && (num % 4 === 0)) {
    return true;
  }

  if (num % 400 === 0) {
    return true;
  } else if (num % 100 === 0) {
    return false;
  } else {
    return num % 4 === 0;
  }
}


console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true