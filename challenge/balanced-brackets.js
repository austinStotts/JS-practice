// return true if the given string's brackets have matching pairs
// '(())' -> true;
// ')({)' -> false;

function isBalanced (str) {
  let p = [];
  for(let i = 0; i < str.length; i++) {
    if(/\(|\[|\{|\}|\]|\)/.test(str[i])) {
      if (str[i]==')' && p[p.length-1]==='(') p.pop();
      else if (str[i]==']' && p[p.length-1]==='[') p.pop();
      else if (str[i]=='}' && p[p.length-1]==='{') p.pop();
      else p.push(str[i]);
    }
  }
  return p.length ? false : true;
}

console.log(isBalanced('[]]'));