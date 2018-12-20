// Implement the function ‘bind’, which accepts a function and a context as arguments. 
// The context argument should override an existing context that the function is defined in. 
// Your bind function should return the passed in function.

var bind = function(func, context, ...arg1){
  return function (arg2) {
    return func.call(context, arg1, arg2);
  }
};  

Function.prototype.bind = function(context, ...arg1) {
  return function(...arg2){
    this.call(context, arg1, arg2);
  }
};
