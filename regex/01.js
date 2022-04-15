/*
Write a method that returns true if its argument looks like a URL, false if it does not.
*/

function isUrl (url) {
  return !!url.match(/^https?:\/\/\S+$/);
}


console.log(isUrl('http://launchschool.com'));   // -> true
console.log(isUrl('https://example.com'));       // -> true
console.log(isUrl('https://example.com hello')); // -> false
console.log(isUrl('   https://example.com'));    // -> false