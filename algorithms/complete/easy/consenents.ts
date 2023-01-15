/*
Write a function consonantCount, consonant_count or 
ConsonantCount that takes a string of English-language 
text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding 
the vowels a, e, i, o, u.
*/

function consonantCount(str: string) {
  let foundConsonants = 0;
  for (let char of str) /[^aeiou\W\d_]/gi.test(char) && foundConsonants++;
  return foundConsonants;
}

console.log(consonantCount('0123456789'));
