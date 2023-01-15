"use strict";
function findSmallestInterval(numbers, target) {
    var intervals = [];
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers.length; j++) {
            if (j !== i) {
                intervals.push(Math.abs(numbers[i] - numbers[j]));
            }
        }
    }
    return Math.min.apply(Math, intervals);
}
findSmallestInterval([1, 6, 4, 8, 2], 13);
