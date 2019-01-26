function anagramPosition (string) {
  return Array.from(new Set(string.split(''))).sort()
    .reduce((set, val) => 
    set.concat(
    set.map(sub => [val,...sub]
      .sort()
      .join(''))),[''])
}

console.log(anagramPosition("TURQUOISE"))
