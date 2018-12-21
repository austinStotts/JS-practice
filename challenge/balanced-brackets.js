// !!! not complete !!!

const test = '(2+2)(2-2)';

function isBalanced (str) {
  let array = str.split('');
  const reg = new RegExp(/\(|\)|\[|\]|\{|\}/)
  for(let i = 0; i < array.length; i++) {
    if(!reg.test(array[i])) {
      array.splice(i,1);
    }
  }
  if(array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isBalanced(test));