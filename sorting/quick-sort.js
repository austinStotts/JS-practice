// sort an array using quick-sort

const test1 = [3,6,8,7,5,8,2,1];

const quickSort = (array, left = 0, right = array.length-1) => {
  // if the array still has more than one item
  if(left < right){
    let pivot = right; // always pivot on the right
    let pIndex = superBestFunction(array, pivot, left, right);
    quickSort(array, left, pIndex-1);
    quickSort(array, pIndex+1, right);
  }
  return array;
}

const superBestFunction = (array, pivot, left, right) => {
  var pivotVal = array[pivot];
  for(var i = left; i < right; i++){ // swap if an item is less than pivot
    if(array[i] < pivotVal){
      [array[i], array[left]] = [array[left], array[i]];
      left++;
    }
  }
  [array[right], array[left]] = [array[left], array[right]]; // put pivot back in its spot
  return left;
}

console.log(quickSort(test1, 0, 7));