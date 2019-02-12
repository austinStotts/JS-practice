// reverse linked list
// in: a -> b -> c -> d -> null
// out d -> c -> b -> a -> null

// constant time
// constant space


// make a node
const Node = (val) => ({
  value: val || null,
  next: null,
})

// print linked list out
const printLinkedList = (head) => {
  let node = head;
  let str = '';
  while(node.next) {
    str += `${node.value} -> `
    node = node.next;
  } 
  str += `${node.value} -> null`;
  console.log(str);
}



// if current equals the tail: point current equal to prev
// else if

const reverseLinkedList = (node, prev = null, next = node.next) => {
  if(next === null) {
    node.next = prev;
    return node;
  }

  if(prev === null) {
    node.next = null;
  } else {
    node.next = prev;
  }
  return reverseLinkedList(next, node, next.next);
};


// test linked-list
let head = Node('A');
let nodeB = head.next = Node('B');
let nodeC = nodeB.next = Node('C');
let nodeD = nodeC.next = Node('D');

printLinkedList(head);
// ** ** ** ** ** ** ** ** ** **

// reverse linked-list
printLinkedList(reverseLinkedList(head));
// ** ** ** ** ** ** ** ** ** **
