/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n: number) {
  return n * n * n;
}

// My Crappy version
// function rowSumOddNumbers(row) {
//   const triangle = generateNumberTriangle(1, row, 2);
//   return triangle[triangle.length - 1].reduce((prev, curr) => prev + curr, 0);
// }

// function generateNumberTriangle(start = 1, rows = 5, increment = 1) {
//   let currNumber = start;
//   return Array(rows)
//     .fill('')
//     .map((row, i) =>
//       Array(i + 1)
//         .fill('')
//         .map(() => {
//           const num = currNumber;
//           currNumber += increment;
//           return num;
//         })
//     );
// }
