var Stack = function() {
  var storage = [];

  this.push = function (value) {
    return storage.push(value);
  };

  this.pop = function () {
    return storage.pop();
  };

  this.size = function () {
    return storage.length;
  };
};

var Queue = function () {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function (value) {
    return inbox.push(value);
  };

  this.dequeue = function () {
    if(!outbox.size()) {
      while(inbox.size()) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };

  this.size = function () {
    return inbox.size() + outbox.size();
  };
};


let x = new Stack();
console.log('\n** ** Stack ** **');
console.log('push ->',x.push(3));
console.log('push ->',x.push(4));
console.log('push ->',x.push(5));
console.log('size ->',x.size());


let y = new Queue();
console.log('\n** ** Queue ** **')
console.log('enqueue ->',y.enqueue(6));
console.log('enqueue ->',y.enqueue(7));
console.log('enqueue ->',y.enqueue(8));
console.log('size ->',y.size());
console.log('dequeue ->',y.dequeue());
console.log('size ->',y.size());