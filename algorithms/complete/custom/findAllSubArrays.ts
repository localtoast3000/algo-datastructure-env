/*

Find all subarrays in a one dimensional array

Input: A one dimensional array
Ouput: A subarrays found from the given array

Input:   [1, 2, 3, 4]
Output:  [
          [1] 
          [1,2], 
          [1,2,3], 
          [1,2,3,4], 
          [2],
          [2,3], 
          [2,3,4], 
          [3], 
          [3,4], 
          [4]
        ]
*/

export function findAllSubArrays(arr: any[]) {
  const recursiveSearch: Function = (acc: any[][], baseIdx: number) => {
    if (baseIdx === arr.length) return acc;
    for (let reverseIdx = arr.length - 1; reverseIdx > baseIdx; reverseIdx--) {
      acc.push(arr.slice(baseIdx, reverseIdx + 1));
    }
    acc.push([arr[baseIdx]]);
    return recursiveSearch(acc, baseIdx + 1);
  };
  return recursiveSearch([], 0).sort();
}
