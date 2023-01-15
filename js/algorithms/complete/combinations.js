"use strict";
/*
Find all combinations of items in a given list

example: ['a', 'b', 'c']

returns [
  [],
  ['c'],
  ['b'],
  ['b', 'c'],
  ['a'],
  ['a', 'c'],
  ['a', 'b'],
  ['a', 'b', 'c']
]

Given a set of n things, there are 2^n number of combinations
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function findCombinations(elements) {
    if (elements.length === 0)
        return [[]];
    var firstElem = elements[0];
    var rest = elements.slice(1);
    var combsWithoutFirst = findCombinations(rest);
    var combsWithFirst = [];
    combsWithoutFirst.forEach(function (comb) {
        var combWithFirst = __spreadArray(__spreadArray([], comb, true), [firstElem], false);
        combsWithFirst.push(combWithFirst);
    });
    return __spreadArray(__spreadArray([], combsWithoutFirst, true), combsWithFirst, true);
}
console.log(findCombinations(['a', 'b', 'c', 'd', 'e', 'f']));
