/*
Your task is to construct a building which will be a pile of (n) cubes. 

. The cube at the bottom will have a volume of (n^3) 
. the cube above will have volume of ((n-1)^3)
. and so on until the top which will have a volume of (1^3)

Given the total volume of the building (m), can you find the number of cubes (n) you will need to build the building?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) 
will be an integer (m) and you have to return the integer (n) 
such as 

(n^3) + ((n−1)^3) + ((n−2)^3) + (...) + (1^3) = (m)

if such an (n) exists or (-1) if there is no such (n).

Examples:

findNb(1071225) --> 45

findNb(91716553919377) --> -1

*/
export const findNb = (m: number) => {
  const r = ((m ** 0.5 * 8 + 1) ** 0.5 + 1) / 2 - 1;
  return Math.round(r) === r ? r : -1;
};

/*
PEDAC
---------------------
(P)roblem
---------------------

 Input: Total volume m of the building
Output: n if calculation works out or -1 if not

Understanding: Calculate how many cubes are needed to construct a building of a given volume
*/
