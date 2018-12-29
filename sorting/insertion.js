// INSERTION SORT 
// 

const insertionSort = (array) => {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      let one = array[j];
      let two = array[j+1] || array[j];
      if(one.value > two.value) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
  return array;
}