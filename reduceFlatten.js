


const flatten = (array) => {
  return array.reduce((x,y) => {
    if(Array.isArray(y)) { return x.concat(flatten(y)); }
    else { return x.concat(y); }
  },[])
}

const test = [1,[2,[3,[4,[5]]]],[2,[3,[4,[5,[6,[7]]]]]]];
const test2 = [1,1,1,1];

console.log('\ninput ->',test,'\nafter flatten ->',flatten(test));
console.log('\ninput ->',test2,'\nafter flatten ->',flatten(test2));

//console.log('depth ->',howDeep(test));