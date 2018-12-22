
const powerSet = (string) => (
  Array.from(new Set(string.split('')))
    .reduce((set, val) => 
    set.concat(
    set.map(sub => [val,...sub]
      .sort()
      .join(''))),[''])
      .sort()
)

console.log(powerSet('horse'));
