import console from 'node:console';
import { PriorityQueue } from 'data-structures-ts';

console.log('\n=====================');
console.log('     PriorityQueue     ');
console.log('=====================');

const er = new PriorityQueue<string>();

console.log('\n=====ENQUEUE=====');
er.enqueue('common cold', 1);
er.enqueue('gunshot wound', 5);
er.enqueue('high fever', 2);
console.log(er);
console.log('=====ENQUEUE=====\n');

console.log('\n=====DEQUEUE=====');
console.log(er.dequeue());
console.log(er);
console.log('=====DEQUEUE=====\n');

console.log('\n=====================');
console.log('     PriorityQueue     ');
console.log('=====================\n');
