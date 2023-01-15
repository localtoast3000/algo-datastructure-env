/*

The maximum sum subarray problem consists in finding the maximum sum of a 
contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])

should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the 
maximum sum is the sum of the whole array. If the list is made up of only 
negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty 
list or array is also a valid sublist/subarray.

*/

// Kadane’s Algorithm ( Best linear O(n) )

// ------------ Kadane's Algorithm --------------

// 1. Define the initial maxGlobal and maxCurrent values on the initial accumulator value for the reduce method.
// Set to 0 if the given array is empty

// 2. On each iteration of the array, set the maxCurrent to the maximum value of the current maxCurrent and the
// current value being visited.

// 3. If the new maxCurrent is larger than the current maxGlobal, set the maxGlobal to the new maxCurrent value

// 4. At the end of the iteration return the last value stored in maxGlobal

export function maxSequence(arr: any) {
  let maxGlobal = arr[0];
  let maxCurrent = arr[0];

  return arr.reduce((acc: any, curr: any) => {
    maxCurrent = Math.max(curr, maxCurrent + curr);
    if (maxCurrent > maxGlobal) maxGlobal = maxCurrent;
    return maxGlobal;
  });

  for (let i = 1; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
    if (maxCurrent > maxGlobal) maxGlobal = maxCurrent;
  }

  return maxGlobal;
}

// My brute force attempt ( Bad O(n²) )
//
// export function maxSequence(arr: any[]) {
//   const subArrays: Function = (acc: any[][], baseIdx: number) => {
//     if (baseIdx === arr.length) return acc;
//     for (let reverseIdx = arr.length - 1; reverseIdx > baseIdx; reverseIdx--) {
//       acc.push(arr.slice(baseIdx, reverseIdx + 1));
//     }
//     acc.push([arr[baseIdx]]);
//     return subArrays(acc, baseIdx + 1);
//   };

//   let max = 0;
//   subArrays([], 0).forEach((sub: any[]) => {
//     const subSum = sub.reduce((a, b) => a + b);
//     if (subSum > max) max = subSum;
//   });
//   return max;
// }

/*

PEDAC
-----------------------------------
(P)roblem
-----------------------------------

Input: Array of numbers 

*/
