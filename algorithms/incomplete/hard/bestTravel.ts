/*

TITLE: Best Travel
PLATFORM: Code Wars
DIFFICULTY: Hard
DESCRIPTION:

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

      John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a 
      list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving 
      and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit 
      only 3 towns.

      Which distances, hence which towns, they will choose so that the sum of the distances is the 
      biggest possible to please Mary and John?

      Example:
      With list ls and 3 towns to visit they can make a choice between: 
      
      [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

      The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

      The biggest possible sum taking a limit of 174 into account is then 173 and the distances of 
      the 3 corresponding towns is [55, 58, 60].

      The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as 
      parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) 
      and ls (list of distances, all distances are positive or zero integers and this list has at 
      least one element). The function returns the "best" sum ie the biggest possible sum of 
      k distances less than or equal to the given limit t, if that sum exists, or otherwise 
      nil, null, None, Nothing, depending on the language. In that case with C, C++, D, Dart, Fortran, 
      F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return -1.

      Examples:

      ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

      xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)

      ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

      Notes:
      try not to modify the input list of distances ls
      in some languages this "list" is in fact a string (see the Sample Tests).


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  

( PEDAC approach )

------------------------------------
(P)roblem - Understand the problem
------------------------------------

Define the inputs and outputs of the algorithms function.

Input: Expected inputs
Output: Expected outputs 


Refactor:

Re-write the description in a way that helps you understand the problem better.


Rules:

Identify the rules to solving the problem.


Q & A:

Think of possible questions that could clarify the problem more


Mental model: 

Write out several ways you could possibly solve the problem. 

--------------------------
(E)xamples 
--------------------------

Write some examples and the results that would be expected from them.
Here you can think about and define the edge cases.

(arg1) ==> true
(arg2) ==> false
(arg3) ==> true

--------------------------
(D)ata
--------------------------

Describe the data structures that you will be using to solve the problem

 Arrays / Variables: Values and thier types
 Objects / HashTables: Define keys and values with thier types

(eg.): Hash table to map each character of an input string to each key of the table and store it's occurrences as the value
     
      hash_table = { 
            [character]: occurrences in string == type Number
            ...
      }

--------------------------
(A)lgorithm
--------------------------

Write out the algorithm in human language.

1. Step 1

2. Step2

...

--------------------------
(C)ode
--------------------------

Finally, write the algorithm in code and test with many end cases before submitting


1. Brute force attempt -- Don't think about the complexity yet, just write a working algorithm

*/

function chooseBestSum(t: any, k: any, ls: any) {
  // your code
}

/* 

2. Refactor and optimise -- Once you have a working algorithm, can you refactor it and optimise
                            for time and space complexity ( Big O Complexity ) ?
*/

// Add function here
