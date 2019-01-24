
// make a matrix of size (n)
function makeMatrix (n) {
  let matrix = [];
  for(let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }
  return matrix;
}

// check to see if (x,y) is a valid space
function check (matrix, y, x) {
  if(matrix[y] === undefined) return false;
  if(matrix[y][x] === undefined) return false;
  if(matrix[y][x] === 1) return false;
  return true;
}

// main function
// returns number of paths are valid for a NxN matrix
// starts in top left corner [0][0]
// goal is bottom right corner [N][N]
function gps (n) {
  let matrix = makeMatrix(n);
  let solutions = 0;
  function recursive (y,x) {
    if (y === n-1 && x === n-1) {
      solutions++
      matrix[y][x] = 0;
      return;
    }
    // up
    if(check(matrix,y-1,x)) {
      matrix[y][x] = 1;
      recursive(y-1,x);
    }
    // right
    if(check(matrix,y,x+1)) {
      matrix[y][x] = 1;
      recursive(y,x+1);
    }
    // down
    if(check(matrix,y+1,x)) {
      matrix[y][x] = 1;
      recursive(y+1,x);
    }
    // left
    if(check(matrix,y,x-1)) {
      matrix[y][x] = 1;
      recursive(y,x-1);
    }
    matrix[y][x] = 0;
    return;
  }
  recursive(0,0);
  return solutions;
}

// 6 takes a few seconds
// 7 takes a long long time
console.log(gps(6));
