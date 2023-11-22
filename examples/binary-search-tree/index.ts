import console from 'node:console';
import { BinarySearchTree } from 'data-structures-ts';

console.log('\n========================');
console.log('     BinarySearchTree     ');
console.log('========================');

const bst = new BinarySearchTree<number>();

console.log('\n=====INSERT=====');
bst.insert(10);
console.log(bst);
bst.insert(5);
console.log(bst);
bst.insert(11);
bst.insert(2);
bst.insert(4);
bst.insert(13);
console.log(bst);
console.log('=====INSERT=====\n');

console.log('\n=====FIND=====');
console.log(bst.find(10));
console.log(bst.find(7));
console.log(bst.find(5));
console.log(bst.find(13));
console.log('\n=====FIND=====');

console.log('\n=====BFS (Breadth First Search)=====');
console.log(bst.breadthFirstSearch());
console.log('\n=====BFS (Breadth First Search)=====');

console.log('\n=====DFS PreOrder (Depth First Search PreOrder)=====');
console.log(bst.depthFirstSearchPreOrder());
console.log('\n=====DFS PreOrder (Depth First Search PreOrder)=====');

console.log('\n=====DFS PostOrder (Depth First Search PostOrder)=====');
console.log(bst.depthFirstSearchPostOrder());
console.log('\n=====DFS PostOrder (Depth First Search PostOrder)=====');

console.log('\n=====DFS InOrder (Depth First Search InOrder)=====');
console.log(bst.depthFirstSearchInOrder());
console.log('\n=====DFS InOrder (Depth First Search InOrder)=====');

console.log('\n========================');
console.log('     BinarySearchTree     ');
console.log('========================\n');
