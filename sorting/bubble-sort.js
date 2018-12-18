const test1 = [3,4,5,7,2,8,1,5,2];
const test2 = [9,8,7,6,5,4,3,2,1];
const test3 = [3,3,3,5,5,5,7,7,8,2,2,4,4,1,1,9,9];

const bubbleSort = (array) => {
  for(let i of array) {
    for(let j = 0; j < array.length; j++) {
      if(array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
  return array;
}
// bubble sort sucks especially with this approach because it is allways O(n^2)

console.log(bubbleSort(test1));
console.log(bubbleSort(test2));
console.log(bubbleSort(test3));