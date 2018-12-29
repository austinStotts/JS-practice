// compose / pipe functions
// return of a functions is the argument for the next

const pipe = (func,...funcs) => (...args) => (
  funcs.reduce((acc, func) => func(acc), func(...args))
);

const compose = (...funcs) => pipe(...funcs.reverse());

const plusOne = (number) => {
  return number + 1;
}

const  plusTwo = (number) => {
  return number + 2;
}

compose(plusOne, plusTwo);