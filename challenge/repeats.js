// return the number of letters that appear more than once
// return the number of letters not how many times they repeat
// in: "aabbcdd"
// out: 3

const repeats = (string) => {
  let counts = {};
  for(let i = 0; i < string.length; i++) {
    if(counts[string[i]]) counts[string[i]]++;
    else counts[string[i]] = 1;
  }
  let answer = 0;
  for(let j in counts) {
    if(counts[j] !== 1) answer++;
  }
  return answer;
}

let test1 = "aabbcdd" // :)
let test2 = "abcdefghijkllmnopqrstuvwxyz" // :)
console.log(repeats(test2))
