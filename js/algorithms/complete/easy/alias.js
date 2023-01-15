"use strict";
/*
Your task is to create a function that,
given a proper first and last name, will return the correct alias.

f the first character of either of the names given to the function is not a letter from A - Z,
you should return "Your name must start with a letter from A - Z."

First letter should be capitalized
*/
var firstName = { A: 'Alpha', B: 'Beta', C: 'Cache' };
var surname = { A: 'Analogue', B: 'Bomb', C: 'Catalyst' };
function aliasGen(fName, lName) {
    return /[a-zA-Z]/.test(fName[0]) && /[a-zA-Z]/.test(lName[0])
        ? "".concat(firstName[fName[0].toUpperCase()], " ").concat(surname[lName[0].toUpperCase()])
        : 'Your name must start with a letter from A - Z.';
}
console.log(aliasGen('Arron', 'chick'));
