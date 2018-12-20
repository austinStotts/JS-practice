
// '2 3 4 + +' = '9'

function calculate (inputs) {
  let items = inputs.split(' ');
  const stack = [];
  for(let item of items) {
    if(Number(item)) { stack.push(item) }
    else { stack.push(eval(stack.splice(-2,1) + item + stack.splice(-1,1))) }
  }
  return(stack[0]);
}

console.log(calculate('2 3 4 * +'));
// -> 14
