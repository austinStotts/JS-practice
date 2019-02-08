
const s = (array) => {
  let r = array.filter(v => v[0] === 'r' ? v : null);
  let p = array.filter(v => v[0] === 'p' ? v : null).sort();
  let s = array.filter(v => v[0] === 's' ? v : null).sort();
  return [].concat(r, p, s);
}

const order = (a, b) => {
  if(a === 'r' || b === 'r') return (a - b);
  else return (a + b)
}


const powerSet = (n) => {
  let rps = [];
  for(let i = 0; i < n; i++) rps = rps.concat(['r','p','s']);
  let list = rps
    .reduce((set, val) => 
    set.concat(
    set.map(sub => [val,...sub].sort(order)
      .join(''))),[''])
      .filter(v => v.length === n ? v : null)

  return list
}

console.log(powerSet(2));
