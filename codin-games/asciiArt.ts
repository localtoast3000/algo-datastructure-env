/*
========================================================================
TITLE: Ascii ART
PLATFORM: Codin Games
DIFFICULTY: easy
========================================================================

DESCRIPTION:
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

ASCII art allows you to represent forms by using characters. To be precise, in our case, these forms are words. For example, the word "MANHATTAN" could be displayed as follows in ASCII art:

 
# #  #  ### # #  #  ### ###  #  ###
### # # # # # # # #  #   #  # # # #
### ### # # ### ###  #   #  ### # #
# # # # # # # # # #  #   #  # # # #
# # # # # # # # # #  #   #  # # # #
 
​Your mission is to write a program that can display a line of text in ASCII art in a style you are given as input.

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  

(PEDAC approach)

------------------------------------------------
(P)roblem - Understand the problem
------------------------------------------------


  - Input: 
  - Output: The number that is closest to zero

Q & A

Rules:


Mental Model:


------------------------------------------------
(E)xamples 
------------------------------------------------

------------------------------------------------
(D)ata Structures
------------------------------------------------


------------------------------------------------
(A)lgorithm
------------------------------------------------

------------------------------------------------
(C)ode
------------------------------------------------
*/

const letterWidth = 4;
const letterHeight = 5;

export function stringToHashSymbolString(str: string) {
  const charMap = hashSymbolAlphabetHMap();
  const chars = [];
  let result = '';

  for (const char of str) {
    if (!/[A-Z]/gi.test(char)) chars.push(charMap['?']);
    else chars.push(charMap[char.toUpperCase()]);
  }

  return result;
}

function hashSymbolAlphabetHMap() {
  const charString = ` #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ### ### 
# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #   # 
### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #   ## 
# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #       
# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###  #  `;

  const chars = charString.split('\n');
  const charMap: { [key: string]: string[] } = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
    I: [],
    J: [],
    K: [],
    L: [],
    M: [],
    N: [],
    O: [],
    P: [],
    Q: [],
    R: [],
    S: [],
    T: [],
    U: [],
    V: [],
    W: [],
    X: [],
    Y: [],
    Z: [],
    '?': [],
  };

  for (
    let originShiftIdx = 0;
    originShiftIdx <= chars[0].length - letterWidth;
    originShiftIdx += letterWidth
  ) {
    for (let row = 0; row < chars.length; row++) {
      let line = '';
      for (let col = originShiftIdx; col < originShiftIdx + letterWidth; col++) {
        line += chars[row][col];
      }
      charMap[Object.keys(charMap)[originShiftIdx / 4]].push(line);
    }
  }
  return charMap;
}
