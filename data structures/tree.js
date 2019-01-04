

var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  value ? newTree.value = value : null;
  newTree.children = [];
  return newTree;
};

treeMaker.methods = {};

treeMaker.methods.addChild = function (value) {
  this.children.push(treeMaker(value));
}

treeMaker.methods.contains = function (value) {
  console.log('value ->',value,'this.value ->',this.value)
  if(this.value === value) {
    return true;
  }
  for(let i =0; i < this.children.length; i++) {
    if(this.children[i].contains(value)) return true;
  }
  return false;
}


// TESTS:

// add a child to the tree;
var tree = treeMaker();
tree.addChild(5);
console.log(' ');
console.log('can add children to tree');
console.log(tree);
// ** ** ** ** ** **

// find node in tree;
console.log(' ');
console.log('return true if child is there');
console.log(tree.contains(5));
// ** ** ** ** ** **

// cant find node if its not there
console.log(' ');
console.log('return false if child is not there');
console.log(tree.contains(6));
// ** ** ** ** ** **

tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
console.log(tree.contains(7));
console.log(tree.contains(8));