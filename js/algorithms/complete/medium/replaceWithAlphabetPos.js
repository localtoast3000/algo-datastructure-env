"use strict";
/*
Set entire string to lower case
Remove all none alphabet characters
Split into an array
Map every character in array to its position in the alphabet (
  ASCII pos a = 97,
  alphabet pos a = 1,
  ASCII pos of current letter - (ASCII pos a - 1) = alphabet pos
)
Join the array with spaces between alphabet positions
return string of positions
*/
function alphabetPosition(text) {
    return text
        .toLowerCase()
        .replaceAll(/[\W_\d]/g, '')
        .split('')
        .map(function (char) { return char.charCodeAt(0) - 96; })
        .join(' ');
}
