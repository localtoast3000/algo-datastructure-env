/*

TITLE: Best Travel
PLATFORM: Code Wars
DIFFICULTY: Hard
DESCRIPTION:

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

      John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper 
      a list of distances between these towns. ls = [50, 55, 57, 58, 60]. 
      
      John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles 
      and he will visit only 3 towns.

      Which distances, hence which towns, they will choose so that the sum of the distances is the biggest 
      possible to please Mary and John?

      Example:

      With list ls and 3 towns to visit they can make a choice between: 
      
      [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

      The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

      The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 
      corresponding towns is [55, 58, 60].

      The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters 
      t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls 
      (list of distances, all distances are positive or zero integers and this list has at least one element). 
      The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the 
      given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. 
      In that case with C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, 
      PowerShell, Reason, Rust, Scala, Shell, Swift return -1.

      Examples:

      ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

      xs = [50] choose_best_sum(163, 3, xs) -> (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)

      ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

      Notes:
      
      try not to modify the input list of distances ls
      in some languages this "list" is in fact a string (see the Sample Tests).   

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

( PEDAC approach )

------------------------------------
(P)roblem - Understand the problem
------------------------------------

Input: (
      t: max travel distance = A number representing the maximum distance that can be traveled
      k: towns to visit = A number representing the number of towns to visit
      ls: list of distances = An array of numbers each representing distances between towns to visit
)
Output: (
      The largest sum from the collection of distances that satisfies the problem eg. 

      t = 168 -> Target distance, cannot go greater
      k = 3 -> Number of towns to visit
      ls = [50,51,52,53,54,55,56,57,58,59,60] -> list of known distances between possible towns to visit
      
      Collections that satisfies the problem ==> [50,55,57],[50,55,58],[50,55,60]
      
      The sum of each collection ==> 162, 163, 165

      The largest sum of the summed collections ==> 165

      The function returns ==> 165 the largest sum that  the problem

)


Refactor:
      1. With a given list of numbers (ls)
      2. Find all the possible sequences containing only (k) numbers that when summed are <= the given target sum total (t)
      3. Calculate the largest sum of all the sequences
      4. Return the largest sum or "null" if the condition cannot be met



Rules:
      1.The calculations must be performed on a sequence containing exactly (k) numbers
      2.The returned sum can not be larger than the target total sum (t)
      3.The returned sum must be the largest of all summed sequencies smaller or equal to (t) 


Q & A:

Do all possible inputs only contain numbers ?


--------------------------
(E)xamples 
--------------------------

(t:174, k:3, ls:[50, 55, 57, 58, 60, 1, 2, 3, 4, 5]) ==> 173
(arg2) ==> false
(arg3) ==> true

--------------------------
(D)ata
--------------------------

t:number
k:number
ls:string[]

--------------------------
(A)lgorithm
--------------------------

1. Define a biggestSum variable and set it to 0
1. Start at index 1 of (ls) array and loop through the rest building all possible sequences of length (k)
2. On each iteration move to the next index and do the same as step 1, continue until loop ends
3. Every time a new sequence is made calculate its total, if it is bigger than biggestSum then set it as its new value
4. Reuturn biggestSum


--------------------------
(C)ode
--------------------------

Finally, write the algorithm in code and test with many end cases before submitting


1. Brute force attempt -- Don't think about the complexity yet, just write a working algorithm

*/

import { lstat } from 'fs';

function chooseBestSum(t: any, k: any, ls: any) {
  return ls.map((x: number) => x);
}

console.log(chooseBestSum(174, 3, [50, 55, 57, 58, 60])); // ==> 163

/* 

2. Refactor and optimise -- Once you have a working algorithm, can you refactor it and optimise
                            for time and space complexity ( Big O Complexity ) ?
*/

// Add function here
