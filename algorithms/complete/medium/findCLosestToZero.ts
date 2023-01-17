const temps = [7, -10, 20, -30, -50, -7, 100];

function computeClosestToZero(ts: number[]) {
  if (!Array.isArray(ts)) return 0;
  if (ts.length === 0) return 0;

  let closest: number = ts[0];
  for (let i: number = 1; i < ts.length; i++) {
    if (Math.abs(ts[i]) < Math.abs(closest)) closest = ts[i];
    if (Math.abs(ts[i]) === Math.abs(closest))
      closest = ts[i] < closest ? closest : ts[i];
  }
  return closest;
}

console.log(computeClosestToZero(temps));
