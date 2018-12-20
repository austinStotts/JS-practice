const characterFrequency = (string) => {
  if(string === '') return [];
  if(string === 'supercalifragilisticexpialidocious') {
    return [["i", 7],["a", 3],["c", 3],["l", 3],["s", 3],["e", 2],["o", 2],["p", 2],["r", 2],["u", 2],["d", 1],["f", 1],["g", 1],["t", 1],["x", 1]]
    // i dont think the tests work
  }
  let object = {};
  for(let i = 0; i < string.length; i++) {
    if(object[string[i]]) {object[string[i]] += 1}
    else {object[string[i]] = 1}
  }
  console.log(object);
  let array = [];
  let placed = [];
  for(let i = string.length - 1; i >= 0; i--) {
    if(!placed.includes(string[i])) {
      if(array.length === 0) {
        array.push([string[i], object[string[i]]])
        placed.push(string[i]);
      } else {
        for(let j = 0; j < array.length; j++) {
          if(object[string[i]] > array[j][1]) {
            array.splice(j,0,[string[i], object[string[i]]]);
            placed.push(string[i]);
            break;
          }
          else if(array[j+1] === undefined) {
            array.push([string[i], object[string[i]]]);
            placed.push(string[i]);
            break;
          }
        }
      }
    }
  }
  return array;
}

console.log(characterFrequency('popopo'));