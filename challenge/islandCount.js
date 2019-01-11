function countIslands (mapStr) {
  // split by '\n'
  let array = mapStr.split('\n');
  const length = array[0].length;
  const aLength = array.length;
  let color = 0;
  // split by char
  for(let j = 0; j < aLength; j++) {
    array[j] = array[j].split('');
  }

  // function to look below for more land;
  // needed because main paint function cannot look backwards on the x axis
  const findX = (x, y) => {
    if(array[y][x] === '.') return x;
    let start = false;
    for(let i = x; i >= 0; i--) {
      if(array[y][i] === '0') {
        if(array[y][i-1] === undefined) {
          return i;
        }
        start = true;
      }
      if(array[y][i] === '.' && start) {
        return i+1;
      }
    }
    return length;
  }

  // main function
  // takes an x and y
  // will change the value of '0' land to whatever color...
  const paint = (width, y) => {
    // if given x and y arent land... return
    if(array[y][width] !== '0') return;
    for(let x = width; x < length; x++) {
      // if land is found, paint it a different color
      if(array[y][x] === '0') {
        array[y][x] = String(color);
        // if y-1 or y+1 exists... check for land!
        // y-1
        if(array[y-1]) {
          if(array[y-1][x] === '0') {
            paint(x,y-1);
          }
        }
        // y+1
        if(array[y+1]) {
          if(array[y+1][x] === '0') {
            paint(x,y+1);
          }
        }
      }
      // if we run out of land... break
      else break;
    }
    // if we have gone all the way right...
    // and we can go down... find more land with findX given current x and y+1
    if(array[y+1]) return paint(findX(width,y+1),y+1);
    // if we cant go down... return
    else return;
  }

  // looks at every index in array...
  // if it finds land... look for more with paint...
  // also didn't want to use 'x' and 'y'
  for(let why = 0; why < aLength; why++) {
    if(array[why]) {
      for(let ex = 0; ex < length; ex++) {
        // if we find different land... change the color
        if(array[why][ex] === '0') {
          color++;
          paint(ex, why);
        }
      }
    } 
  }

  for(let k = 0; k < aLength; k++) {
    console.log(array[k].join(''));
  }
  console.log(color);
  return color;
}


const test = '00...0\n0...00\n......\n0.0.0.\n0.....';
const test2 = '..000.\n..000.\n..000.\n.0....\n..000.';
const test3 = '0...0\n..0..\n0...0';
const test4 = '0...0\n0...0\n0...0\n0...0\n00000';
const test5 = '.....\n..0..\n.000.\n..0..\n.....'
countIslands(test5)