// const volume = (levels) => levels.sort()[levels.length - 2]

const volume = (levels) => {
  let holes = [];
  let volumes = [];
  for(let i = 0; i < levels.length; i++) {
    if(levels[i] === 0) holes.push(i);
  }
  console.log(holes)
  for(let i = 0; i < holes.length; i++) {
    let left = levels[holes[i] - 1];
    console.log('l', left);
    let right = levels[holes[i] + 1];
    console.log('r', right)
    if(left > right) volumes.push(right);
    else if(left < right) volumes.push(left);
    else volumes.push(right)
  }
  console.log(volumes)
  return volumes.reduce((a, b) => a + b, 0)
}

let test1 = [ 1, 2, 3, 4, 0, 5, 3, 1 ]
  
console.log(volume([3,0,3]))
