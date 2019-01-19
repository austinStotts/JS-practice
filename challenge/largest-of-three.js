

const largestProductOfThree = (colosseum) => (
  colosseum.reduce((warriors, duel) => 
  warriors.concat(
  warriors.map(victor => [duel,...victor])),[''])
  .filter(warriors => warriors.length === 3 ? warriors : null)
  .reduce((king, challenger) => {
    let winner = challenger[0] * challenger[1] * challenger[2];
    return winner > king ? winner : king;
  },-1000000)
)

const test1 = [2,4,7,9];
const test2 = [2,1,3,7];
const test3 = [-5,-1,-3,-2,-4];

console.log(largestProductOfThree(test2))


// 247 279 249
// 427 429 479
// 742 749 792
// 924 974 927