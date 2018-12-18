// make a closure

// outerFuntion returns innerFunction
const outerFunction = () => {
  let counter = 0;
  // innerFuntion requires counter variable
  const innerFunction = () => {
    counter++;
    console.log(`this function has run ${counter} times! :)`);
  }
  return innerFunction;
}

let closure = outerFunction();

closure(); // 1
closure(); // 2
closure(); // 3