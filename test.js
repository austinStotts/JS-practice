const print  = console.log;
//print('hi :)', 'this is totally console.log');

const add = (...arg) => {
  print(arg);
  return arg;
}

print(add(1,2,3,4,5,6,7,8,9));