/*
========================================================================
TITLE: Bit Counting
PLATFORM: Code Wars
DIFFICULTY: easy
========================================================================

DESCRIPTION:
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    Write a function that takes an integer as input, and returns the number of bits that are equal 
    to one in the binary representation of that number. 
    You can guarantee that input is non-negative.
    
    Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  

(PEDAC approach)

------------------------------------------------
(P)roblem - Understand the problem
------------------------------------------------

1. Define the inputs and outputs of the algorithm's function.

  - Input: Non negative integer
  - Output: All the bits in the converted binary sequence

2. Refactor:

  Given a none negative integer, convert the integer to it's binary form then find the sum of all 
  the 1s in the binary sequence

3. Rules:

4. Q & A:

5. Mental Model:

Define a "ones" variuble defaulted to 0.
Perform a conversion algorithim on the given integer to convert it to it's binary form by recursively dividing it by 2 until we get 0, on each calculation on the division of 2
if there is no remainder add 1 to the "ones" variuble.
When the conversion algorithm is complete return the value of the "ones" variuble

------------------------------------------------
(E)xamples 
------------------------------------------------

  - Example 1: (10) ==> 2

------------------------------------------------
(D)ata Structures
------------------------------------------------

Describe the data structures that you will be using to solve the problem.

  - Arrays / Variables: Values and their types
  - Objects / HashTables: Define keys and values with their types

  (e.g.):
    Hash table to map each character of an input string to its occurrences as values.

    hash_table = { 
          [character]: occurrences in string // Type: Number
          ...
    }

------------------------------------------------
(A)lgorithm
------------------------------------------------

Write out the algorithm in human-readable language.

  1. Step 1
  2. Step 2
  ...

------------------------------------------------
(C)ode
------------------------------------------------

1. Brute force attempt -- Don't think about the complexity yet, just write a working algorithm.

*/

// Recursive O(log n)

// export function bitCounting(positiveInt: number, ones = 0): number {
//   if (positiveInt === 0) return ones;
//   positiveInt = Math.floor(positiveInt / 2);
//   ones += positiveInt % 2;
//   return bitCounting(positiveInt, ones);
// }

/* 

2. Refactor and optimize -- Once you have a working algorithm, can you refactor it and optimize for time and space complexity (Big O Complexity)?

*/

// Iterative O(log n)

export function bitCounting(positiveInt: number) {
  let ones = 0;
  for (let posInt = positiveInt; posInt !== 0; posInt = Math.floor(posInt / 2))
    ones += posInt % 2;
  return ones;
}

//
