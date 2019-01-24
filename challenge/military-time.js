
// in:  3:45pm
// out: 15:45

function toMilitary (time) {
  let tuple = time.split(/\:/);
  const right = tuple[1].slice(0,2);
  const half = tuple[1].slice(2)
  
  if(half === 'am') {
    if(tuple[0] === '12') tuple[0] = '00'
    if(tuple[0].length === 1) tuple[0] = `0${tuple[0]}`    
    return `${tuple[0]}:${right}`
  } 
  else if (half === 'pm') {
    if(tuple[0] === '12') return `${tuple[0]}:${right}`
    return `${String(Number(tuple[0]) + 12)}:${right}`
  } else return time;
}


console.log(toMilitary('9:15am'))
