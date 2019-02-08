function alphaCount (alphabet, text) {
  alphabet = alphabet.toLowerCase()
  let counts = {}
  for(let i = 0; i < text.length; i++) {
    if(alphabet.includes(text[i].toLowerCase())) {
      if(counts[text[i].toLowerCase()]) {
        counts[text[i].toLowerCase()]++;
      } else {
        counts[text[i].toLowerCase()] = 1;
      }
    }
  }
  if(Object.keys(counts).length === 0) return "no matches";
  else {
    let answer = '';
    for(let i = 0; i < alphabet.length; i++) {
      if(counts[alphabet[i]]) {
        answer += `${alphabet[i]}:${counts[alphabet[i]]},`;
      }
    }
    return answer.slice(0,answer.length-1)
  }
}
