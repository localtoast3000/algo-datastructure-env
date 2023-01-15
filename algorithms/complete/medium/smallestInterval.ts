function findSmallestInterval(numbers: number[]) {
  let smallestIntervalIndices: number[] | null[] = [null, null];
  let smallestInterval: number | null = Infinity;

  if (!Array.isArray(numbers))
    throw new Error('Argument must be an array of values of type number');

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (j !== i) {
        const interval = Math.abs(numbers[i] - numbers[j]);
        if (interval < smallestInterval && interval !== 0) {
          smallestInterval = interval;
          smallestIntervalIndices = [i, j];
        }
      }
    }
  }

  return {
    interval: smallestInterval === Infinity ? null : smallestInterval,
    indices: smallestIntervalIndices,
  };
}
