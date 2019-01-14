// arrayception should find the deepest real (not null or empty) value in an array
//
// failed attempt
// ###################
// let count = 1;
// let deepest = 0;
// const find = (array) => {
//   console.log('\narray ->',array,'\ncount ->',count)
//   if(array.length === 0) {
//     return;
//   }
//   array.forEach(e => {
//     console.log('element in forEach:',e);
//     if(Array.isArray(e)) {
//       count++;
//       if(!arrayception(e)) {
//         return;
//       }
//     }
//   })
//   console.log('past for each');
//   if(count > deepest) {
//     deepest = count;
//   }
//   count--;
//   console.log('minus 1!', count);
//   return count
// }

// const arrayception = (array) => {
//   find(array);
//   return deepest;
// }


let deepest = 0;
const arrayception = (thing, depth = 0, hello) => {
  if(hello === undefined) deepest = 0;
  if(Array.isArray(thing)) {
    thing.forEach(item => (arrayception(item, depth + 1, 'mangoDB')))
  } else {
    if (depth > deepest) {
      deepest = depth;
    }
  }
  return deepest;
}


let test = [1,[2],3,[4,5,[6],7]];
let test1 = [ 10, 20, 30, 40 ];
let test2 = [ [ [ [ ] ] ] ];
let test3 = [1,[2],[[3,[],[4]]]];
let test4 = [];
let tests = [test, test1, test2, test3, test4];
tests.forEach(test => { console.log(arrayception(test))})