function rotateMatrix (matrix, spin) {
  // answer holds the new matrix
  let answer = [];
  // list holds a row at a time
  let list = [];

  // handle clockwise rotations
  function clockwise (y, x) {
    list.push(matrix[y][x]);
    if(y - 1 >= 0) {
      clockwise(y - 1, x);
    }
    else {
      answer.push(list);
      list = [];
      // "matrix[0].length" allows for MxN
      if(x + 1 < matrix[0].length) {
        clockwise(matrix.length - 1, x + 1);
      }
      return;
    }
  }

  // handle counter-clockwise rotations
  function counterClockwise (y, x) {
    list.push(matrix[y][x]);
    if(y + 1 < matrix.length) {
      counterClockwise(y + 1, x);
    }
    else {
      answer.push(list);
      list = [];
      if(x - 1 >= 0) {
        counterClockwise(0, x - 1);
      }
      return;
    }
  }

  // figure out what way to spin the matrix
  if(spin === 1) {
    clockwise(matrix.length - 1, 0);
  } 
  else if (spin === -1) {
    counterClockwise(0, matrix[0].length - 1)
  } 
  return answer;
}


let test1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

let test2 = [
  [1, 2, 3, 4, 5 ],
  [6, 7, 8, 9, 10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
]

let test3 = [
  [1,2,3,4,5],
  [6,7,8,9,0]
]

let test4 = [
  [1,2],
  [3,4],
  [5,6],
  [7,8],
  [9,0]
]

console.log('\nAnswer ->',rotateMatrix(test3, -1));
