/*
Write a function that outputs the transpose of a 
matrix - a new matrix where the columns and rows of 
the original are swapped.

For example, the transpose of:

| 1 2 3 |
| 4 5 6 |

is

| 1 4 |
| 2 5 |
| 3 6 |

The input to your function will be an array of matrix rows. 
You can assume that each row has the same length, and that the 
height and width of the matrix are both positive.
*/

// Input: [[1, 2, 3],[4, 5, 6]],
// Expected output: [[1,4],[2,5],[3,6]]

export const transpose = (matrix: any) =>
  matrix[0].map((_: any[], row: number) => matrix.map((col: any[]) => col[row]));

// export function transpose(matrix: any[][]) {
//   const transposedMatrix: any[][] = [];

//   for (let row = 0; row < matrix[0].length; row++) {
//     transposedMatrix.push([]);
//     for (let col = 0; col < matrix.length; col++) {
//       transposedMatrix[row].push(matrix[col][row]);
//     }
//   }
//   return transposedMatrix;
// }

/*

PEDAC
------------------------------
(P)roblem
------------------------------

input: A Matrix - Nested array higher indices are rows and nested indices are columns
ouput: A transposed Matrix - Nested array where the original rows become columns and columns become rows

Understanding: Transpose a given matrix so its rows become columns and columns become rows

*/
