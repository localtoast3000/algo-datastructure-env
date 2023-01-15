"use strict";
/*
Write a function consonantCount, consonant_count or
ConsonantCount that takes a string of English-language
text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding
the vowels a, e, i, o, u.
*/
function consonantCount(str) {
    var foundConsonants = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        /[^aeiou\W\d_]/gi.test(char) && foundConsonants++;
    }
    return foundConsonants;
}
console.log(consonantCount('0123456789'));
