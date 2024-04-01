/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/\s/g,'');
  l = str.length;
  for(let i=0;i<l/2;++i){
    if(str.charAt(i)!=str.charAt(l-1-i))  return false;
  }
  return true;
}

module.exports = isPalindrome;
