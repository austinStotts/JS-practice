var LinkedList = function (value = null) {
  this.head = this.newNode(value, null);
  this.tail = this.head;
};

LinkedList.prototype.newNode = function (value, next) {
  return ({value,next});
}

LinkedList.prototype.addToTail = function (value) {
  if(this.head.value === null) {
    this.head.value = value;
  } else {
    let node = this.head;
    while(node.next !== null) {
      node = node.next;
    }
    node.next = this.newNode(value, null);
    this.tail = node.next;
  }
}

LinkedList.prototype.removeHead = function () {
  if(this.tail === this.head) {
    delete this.head;
    delete this.tail;
  } else {
    this.head = this.head.next;
  }
}

LinkedList.prototype.contains = function (value) {
  let node = this.head;
  while (node) {
    if(node.value === value) {
      return true;
    }
    node = node.next;
  }
  return false;
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



