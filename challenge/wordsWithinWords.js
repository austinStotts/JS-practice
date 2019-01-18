
// Given an array of unique words, find the word that 
// contains the greatest number of other words. 
// A word must be at least two letters long.



function nestedWordCount (menu) {
  let hungriest = ['',0];
  for(let i = 0; i < menu.length; i++) {
    let wordsEaten = 0;
    for(let j = 0; j < word.length; j++) {
      if(j !== i) {
        if(menu[i].includes(menu[j])) wordsEaten++;
      }
    }
    if(wordsEaten > hungriest[1]) hungriest = [menu[i],wordsEaten];
  }
  return hungriest[0];
}


let test1 = ['gray', 'grays', 'ray', 'rays','strays'];

console.log(nestedWordCount(test1))



