// return the index of a given target in a sorted array;
// log(n)
function binarySearch (array, target) {
  let left = 0; mid = 0;
  let right = array.length - 1;
  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    if(array[mid] === target) return mid;
    else if (array[mid] > target) right = mid - 1;
    else if (array[mid] < target) left = mid + 1;
  }
  return -1;
}

const test1 = [1,2,3,4,5,6,7];

console.log('\n',binarySearch(test1, 2));
console.log('\n',binarySearch(test1, 5));
console.log('\n',binarySearch(test1, 7));