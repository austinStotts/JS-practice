// Implement the function ‘bind’, which accepts a function and a context as arguments. 
// The context argument should override an existing context that the function is defined in. 
// Your bind function should return the passed in function.

var bind = function(func, context, ...a1){
  return function (a2) {
    return func.call(context, a1, a2);
  }
};  

Function.prototype.bind = function(context, ...a1) {
  return function(...a2){
    this.call(context, a1, a2);
  }
};
