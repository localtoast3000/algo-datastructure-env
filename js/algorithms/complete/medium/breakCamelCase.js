"use strict";
/*
Complete the solution so that the function will break up
camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

Function starts search at second letter in case it finds a capital letter for the first word.
Every time a capital letters is found it adds a space before the letter and stores the edited word
to the edited variuble and returns the edited string when complete.
*/
function solution(str) {
    var edited = str.split('');
    for (var i = 1; i < edited.length; i++) {
        if (edited[i] === edited[i].toUpperCase())
            edited[i] = " ".concat(edited[i]);
    }
    return edited.join('');
}
