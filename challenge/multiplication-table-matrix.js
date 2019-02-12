// given an array of factors : [0, 1, 2]
// output a matrix that represents the multiplication table
// in: [0, 1, 2]
// out:
// [[0, 0, 0],
//  [0, 1, 2],
//  [0, 2, 4]]

const makeArray = (x, l) => {
  let answer = [];
  for(let i = 0; i < l; i++) {
    answer.push(x * i);
  }
  return answer;
}

function multiplicationMatrix (factors) {
  let l = factors.length;
  let answer = [];
  for(let i = 0; i < l; i++) {
    answer.push(makeArray(factors[i], l))
  }
  return answer;
}


console.log(multiplicationMatrix([1,2,3])) // [[0, 1, 2],[0, 2, 4],[0, 3, 6]]
