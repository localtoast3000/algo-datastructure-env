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

// 1. Define the initial maxGlobal, maxCurrent values on the initial accumulator value for the reduce method.
// Set a custom iterator variuble (i) to start at index 1 on the initial accumulator object and update on each iteration
// Set all values to 0 if the given array is empty

// 2. On each iteration of the array, set the maxCurrent to the maximum value of the current maxCurrent and the
// current value being visited.

// 3. If the new maxCurrent is larger than the current maxGlobal, set the maxGlobal to the new maxCurrent value

// 4. At the end of the iteration, return the last value stored in maxGlobal

export const maxSequence = (arr: any) =>
  arr.every((x: number) => x < 0)
    ? 0
    : arr.reduce(
        (acc: any) => {
          acc.maxCurrent = Math.max(arr[acc.i], acc.maxCurrent + arr[acc.i]);
          if (acc.maxCurrent > acc.maxGlobal) acc.maxGlobal = acc.maxCurrent;
          acc.i += 1;
          return acc;
        },
        {
          maxCurrent: arr[0] | 0,
          maxGlobal: arr[0] | 0,
          i: 1,
        }
      ).maxGlobal;

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
