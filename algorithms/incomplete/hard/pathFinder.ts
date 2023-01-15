// Start position [0,0]
// sqrGraph grid of NxN
// Possible directions North, East, South, West
// Return true if exit can be reached else false
// Empty positions = .
// Walls = W
// Start and end positions are empty in all tests

//@ts-nocheck

const sqrGraph4x4 = sanitizeGraph(`
...W
.W..
..WW
....
`);

function pathFinder(sqrGraph: string) {
  const sqrt = Math.sqrt(sqrGraph.length);

  let nodeIdx: number = 0;
  let deadEnds: [] = [];

  while (nodeIdx < sqrGraph.length) {
    console.log(nodeIdx);
    if (nodeIdx + 1 === sqrGraph.length) return 'Winner';

    if ((nodeIdx + 1) % sqrt === 0) {
      if (sqrGraph[nodeIdx + sqrt] !== 'W') nodeIdx += sqrt;
      else if (sqrGraph[nodeIdx - 1] !== 'W') {
        deadEnds.push(nodeIdx);
        nodeIdx -= 1;
      }
    } else {
      if (!deadEnds.includes(nodeIdx + 1) && sqrGraph[nodeIdx + 1] !== 'W') nodeIdx += 1;
      else if (!deadEnds.includes(nodeIdx + sqrt) && sqrGraph[nodeIdx + sqrt] !== 'W')
        nodeIdx += sqrt;
      else if (sqrGraph[nodeIdx - sqrt] !== 'W') {
        deadEnds.push(nodeIdx);
        nodeIdx -= sqrt;
      }
    }
  }
  return 'Loser';
}

console.log(pathFinder(sqrGraph4x4));

function sanitizeGraph(m: string) {
  return m.trim().split('\n').join('');
}
