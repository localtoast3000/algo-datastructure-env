/*

TITLE: Your a square
PLATFORM: Code Wars
DIFFICULTY: easy
DESCRIPTION:

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

      A square of squares

      You like building blocks. You especially like building blocks that are squares. 
      And what you even like more, is to arrange them into a square of square building 
      blocks!

      However, sometimes, you can't arrange them into a square. Instead, you end up with 
      an ordinary rectangle! Those blasted things! If you just had a way to know, whether 
      you're currently working in vain… Wait! That's it! You just have to check if your number 
      of building blocks is a perfect square.

      Task

      Given an integral number, determine if it's a square number:

      In mathematics, a square number or perfect square is an integer that is the square of 
      an integer; in other words, it is the product of some integer with itself.

      The tests will always use some integral number, so don't worry about that in dynamic 
      typed languages.

      Examples
      
      -1  =>  false
      0  =>  true
      3  =>  false
      4  =>  true
      25  =>  true
      26  =>  false

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  

( PEDAC approach )

------------------------------------
(P)roblem - Understand the problem
------------------------------------

Input: Number
Output: Boolean -- true if input is a perfect square else false


Refactor:

Calculate if the given number (n) is a perfect square and return true if input is a perfect square else false


Rules:

1. Negative numbers cannot be square numbers
2. 0 is a square number


Mental model: 

If the square root of (n) is a positive integer then return true else false 

--------------------------
(E)xamples 
--------------------------

(0) ==> true
(3) ==> false
(25) ==> true
(144) ==> true
(136) => false

--------------------------
(D)ata
--------------------------

A boolean after checking the result of the equasion to be directly returnedS

--------------------------
(A)lgorithm
--------------------------

1. Calculate the square root of (n), and return the true if result is a positive integer else false

--------------------------
(C)ode
--------------------------


1. Brute force attempt -- Don't think about the complexity yet, just write a working algorithm

*/

export const isSquare = (n: number) => Number.isInteger(Math.sqrt(n));

console.log(isSquare(36));
/* 

2. Refactor and optimise -- Once you have a working algorithm, can you refactor it and optimise
                            for time and space complexity ( Big O Complexity ) ?
*/

// Add function here
