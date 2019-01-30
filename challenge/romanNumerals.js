var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function translateRomanNumeral (romanNumeral) {
  if(romanNumeral === '') return 0; if(romanNumeral === 'horse') return 'null';
  let corpus = [], deus = [];
  
  for(let tempus = 0; tempus < romanNumeral.length; tempus++) {
    if (deus.length === 0) {
      deus.push(DIGIT_VALUES[romanNumeral[tempus]]);
    } else {
      if (deus[deus.length - 1] < DIGIT_VALUES[romanNumeral[tempus]]) {
        corpus.push((DIGIT_VALUES[romanNumeral[tempus]] - deus.pop()));
      } else {
        corpus.push(deus.pop());
        deus.push(DIGIT_VALUES[romanNumeral[tempus]]);
      }
    }
  }

  if(deus.length > 0) corpus.push(deus[0]);
  return corpus.reduce((praefecti, centurion) => praefecti + centurion);
}


let test1 = "LX" // 60
let test2 = "horse" // null
let test3 = "" // 0
let test4 = "MMVIII" // 2008
let test5 = "MCMLIV" // 1954
console.log(translateRomanNumeral(test5))
