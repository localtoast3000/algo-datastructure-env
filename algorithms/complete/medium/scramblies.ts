/*

TITLE: Scramblies
PLATFORM: Code Wars
DISCRIPTION:

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    Complete the function scramble(str1, str2) that returns true if a portion of str1 
    characters can be rearranged to match str2, otherwise returns false.

    Notes:

    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered.

    Examples:
    scramble('rkqodlw', 'world') ==> True
    scramble('cedewaraaossoqqyt', 'codewars') ==> True
    scramble('katas', 'steak') ==> False

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  

( PEDAC approach )

-------------------------
(P)roblem
-------------------------

Input: (
          str1 = string: To be searched through to find the sequence of str2, 
          str2 = string: sequence to be found
        ) 
Output: boolean: true if 

Refactor:
Return true if str1 can be cut, re-aranged or both to match the sequence of characters given in str2

--------------------------
(E)xamples:
--------------------------

scramble('rkqodlw', 'world') ==> true
scramble('cedewaraaossoqqyt', 'codewars') ==> true
scramble('katas', 'steak') ==> false
scramble('trejfjsapfjlppppdjrpkdfmsne', 'apple') ==> true

--------------------------
(D)ata
--------------------------

Hash table to store each character of str1 as a key

const hashTable = {
  [character]: {
    str1: [number of times letter is found in str1],
    str2: [number of times letter is found in str2]
  },
  ...
}
--------------------------
(A)lgorithm
--------------------------

1. Create a variuble to store a hash table

2. Loop through str2 and register each visited character as a key to the hash table
   adding 1 to it's str2 value each time its found

3. Loop through str1, if visited character is found as a key in the hash table then add one to they keys str1 value

4. Loop through the keys of the hash table. On each key visited call the key in the hash table and compare if 
   the keys str1 value is >= the keys str2 value. 
   If all passes of the loop are true return true else false 

--------------------------
(C)ode
--------------------------
*/

// Execution time of Scrambles: 0.0001964000016450882 seconds with "for" loops
// Execution time of Scrambles: 0.00019380000233650208 seconds with "reduce" method

// Refactoring with the reduce method
export const scramble = (str1: string, str2: string) => {
  return Object.values(
    str1.split('').reduce(
      (hashTable, char) => {
        if (hashTable.hasOwnProperty(char)) hashTable[char].str1 += 1;
        return hashTable;
      },
      // Generates hash table of str2 and passes it as the first value of the parent reduce method
      str2.split('').reduce((hashTable: any, char: any) => {
        hashTable.hasOwnProperty(char)
          ? (hashTable[char].str2 += 1)
          : (hashTable[char] = { str1: 0, str2: 1 });
        return hashTable;
      }, {})
    )
  ).every((hashTableVal: any) => hashTableVal.str1 > hashTableVal.str2);
};

// Standard approach with for loops

// export function scramble(str1: string, str2: string) {
//   const str2HashTable: any = {};

//   for (let char of str2) {
//     if (str2HashTable.hasOwnProperty(char)) str2HashTable[char].str2 += 1;
//     else
//       str2HashTable[char] = {
//         str1: 0,
//         str2: 1,
//       };
//   }

//   for (let char of str1) {
//     if (str2HashTable.hasOwnProperty(char)) str2HashTable[char].str1 += 1;
//   }

//   console.log(str2HashTable);
//   return Object.keys(str2HashTable).every(
//     (key) => str2HashTable[key].str1 >= str2HashTable[key].str2
//   );
// }
