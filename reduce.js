// normal Javascript reduce method remade

const reduce = (array, func, init) => {
  let a = init || 0;
  array.forEach((val) => {
    a = func(a, val);
  });
  return a;
}

const test1 = [1,2,3,4,5,6,7,8,9];
// reduse with simple add func
console.log(reduce(test1, (acc, cur) => {
  return acc + cur;
},10));