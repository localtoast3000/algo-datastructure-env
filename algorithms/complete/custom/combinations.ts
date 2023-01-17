/*
Find all combinations of items in a given list

example: ['a', 'b', 'c']

returns [
  [],
  ['c'],
  ['b'],
  ['b', 'c'],
  ['a'],
  ['a', 'c'],
  ['a', 'b'],
  ['a', 'b', 'c']
]               

Given a set of n things, there are 2^n number of combinations
*/

function findCombinations(elements: any[]) {
  if (elements.length === 0) return [[]];
  const [firstElem, rest] = [elements[0], elements.slice(1)];
  const combsWithoutFirst: any[][] = findCombinations(rest);
  const combsWithFirst: any[][] = combsWithoutFirst.map((comb: any[]) => [
    ...comb,
    firstElem,
  ]);

  return [...combsWithoutFirst, ...combsWithFirst];
}

console.log(findCombinations(['a', 'b', 'c', 'd', 'e', 'f']));
