function mergeSort (array) {
  return split(array);
}

function split (arr) {
  if(arr.length === 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0,mid);
  let right = arr.slice(mid);
  
  return zipper(split(left), split(right))
}

function zipper (left, right) {
  let answer = [];
  let li = 0;
  let ri = 0;

  while (li < left.length && ri < right.length) {
    if(left[li] < right[ri]) {
      answer.push(left[li]);
      li++;
    } else {
      answer.push(right[ri]);
      ri++;
    }
  }

  return answer.concat(left.slice(li)).concat(right.slice(ri));
}

const test = [6,3,8,2,0,3,4,1]

console.log(mergeSort(test));