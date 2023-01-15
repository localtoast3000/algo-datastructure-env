function countCharacters(string: string) {
  const countedChars: any = new Map();
  for (const char of string) {
    if (!countedChars.get(char)) countedChars.set(char, 1);
    else countedChars.set(char, countedChars.get(char) + 1);
  }
  return countedChars;
}
