const canReconfigure = (from?: string, to?: string) => {
  const uniqueLetters = (word: string) => new Set(word).size
  let transformations = {}

  if (typeof from !== 'string' || typeof to !== 'string') throw new Error('from is not a string');
  if (from.length !== to.length || uniqueLetters(from) !== uniqueLetters(to)) return false;
  
  for (let i = 0; i <= from.length; i++) {
    const fromLetter = from[i];
    const toLetter = to[i];
    const storedLetter = transformations[fromLetter];

    if (storedLetter && storedLetter !== toLetter) return false;

    transformations[fromLetter] = toLetter;
  };

  return true;
}

export default canReconfigure;