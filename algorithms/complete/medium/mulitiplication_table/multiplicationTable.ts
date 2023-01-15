/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9

For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

// Single Loop but still O(n²) complexity

export function multiplicationTable(size: number) {
  const table: number[][] = [];
  let currentRow: number[] = [];

  for (let col = 1; table.length < size; col !== size ? col++ : (col = 1)) {
    if (currentRow.length === size) {
      table.push(currentRow);
      currentRow = [];
    }
    currentRow.push(col * (table.length + 1));
  }
  return table;
}

// Double loop for O(n²) complexity
// Execution time of Multiplication table: 4.179726399898529 seconds
// export function multiplicationTable(size: number) {
//   const table: number[][] = [];
//   for (let row = 0; row < size; row++) {
//     table.push([]);
//     for (let col = 0; col < size; col++) {
//       table[row].push((col + 1) * (row + 1));
//     }
//   }
//   return table;
// }

/*
PEDAC
---------------------
(P)roblem
----------------------
input: (size:number) - The square root of the multiplication table
ouput: number[][] - Representing a size * size (N * N) multiplication table


*/
