let NUMBERS = {
  a:1,
  b:2,
  c:3,
  d:4,
  e:5,
  f:6,
  g:7,
  h:8,
  i:9,
  j:10,
  k:11,
  l:12,
  m:13,
  n:14,
  o:15,
  p:16,
  q:17,
  r:18,
  s:19,
  t:20,
  u:21,
  v:22,
  w:23,
  x:24,
  y:25,
  z:26,
}



function anagramPosition (string) {
  console.log('input ->',string);
  let count = 0;
  let str = string.toLowerCase().split('');
  const loop = () => {
    let bigI = -1;
    for(let i = 0; i < str.length - 1; i++) {
      if(NUMBERS[str[i]] < NUMBERS[str[i + 1]]) bigI = i;
    }
    if(bigI === -1) console.log("huhuhuhu");

    let bigJ = -1;
    for(let j = 0; j < str.length; j++) {
      if(NUMBERS[str[j]] > NUMBERS[bigI]) bigJ = j;
    }
    if(bigI === -1) console.log("ffuucckk");

    [str[bigI], str[bigJ]] = [str[bigJ], str[bigI]];
    
    let str = str.concat(str.splice(bigI).reverse());
    if(str.join('') === string) return count;
    count++;
  }
  return loop()
}

let test1 = "MISSISSIPPI";
let test2 = "ACB";
let test3 = "ARCTIC";
console.log(anagramPosition(test3))


