/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length)  return false;

  // Convert to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Create a map of letter-freq
  let mp = new Map();
  for(let i=0;i<str1.length;++i){
    mp.set(str1[i],mp.get(str1[i])?mp.get(str1[i])+1:1);
  }
  
  // Remove from freq on 2nd string
  for(let i=0;i<str2.length;++i){
    if(mp.has(str2[i]))
      mp.set(str2[i],mp.get(str2[i]-1));
  }

  // Check if any of the letter's freq is left
  for(let [key,value] of mp){
    if(value!=undefined) return false;
  }
  return true;
}
module.exports = isAnagram;
