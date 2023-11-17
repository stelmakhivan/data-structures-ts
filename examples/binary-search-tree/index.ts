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

console.log('\n========================');
console.log('     BinarySearchTree     ');
console.log('========================\n');
