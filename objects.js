let object1 = {value:10};
let object2 = {...object1};
let object3 = Object.create(object1);

object1.value += 10;

console.log('object 2 ->',object2);
console.log('object 3 ->',object3);

let arr1 = ['pizza', 'banana', 'cat'];
let [arg1, arg2, arg3] = arr1;

console.log('arg 1 ->', arg1);
console.log('arg 2 ->', arg2);
console.log('arg 3 ->', arg3);