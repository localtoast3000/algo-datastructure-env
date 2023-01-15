"use strict";
var temps = [7, -10, 20, -30, -50, -7, 100];
function computeClosestToZero(ts) {
    if (!Array.isArray(ts))
        return 0;
    if (ts.length === 0)
        return 0;
    var closest = ts[0];
    for (var i = 1; i < ts.length; i++) {
        if (Math.abs(ts[i]) < Math.abs(closest))
            closest = ts[i];
        if (Math.abs(ts[i]) === Math.abs(closest))
            closest = ts[i] < closest ? closest : ts[i];
    }
    return closest;
}
console.log(computeClosestToZero(temps));
