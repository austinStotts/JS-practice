var LinkedList = function (value) {
  this.tail = this.newNode(value, null);
  this.head = this.newNode(value,this.tail);
};

LinkedList.prototype.newNode = function (value, next) {
  return ({value,next})
}

LinkedList.prototype.addToTail = function (value) {
  this.tail.next = this.newNode(value, null);
  this.tail = this.newNode(value, null);
}

LinkedList.prototype.removeHead = function () {

}

LinkedList.prototype.contains = function () {

}


// tests...
console.log('\nshould create new linked list\nshould be able to add to the tail');
var list = new LinkedList(1);
if(list.tail.value === 1) { console.log('true') }
else { console.log('false') }
if(list.head.value === 1) { console.log('true') }
else { console.log('false') }
list.addToTail(2);
if(list.head.next.value === 2) { console.log('true') }
else { console.log('false') }



