import console from 'node:console';
import { Queue } from 'data-structures-ts';

console.log('\n===============');
console.log('     Queue     ');
console.log('===============');

console.log('\n=====ENQUEUE=====');
const queue = new Queue<number>();
console.log(queue);
queue.enqueue(2);
console.log(queue);
queue.enqueue(4);
console.log(queue);
console.log('=====ENQUEUE=====\n');

console.log('\n=====DEQUEUE=====');
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
console.log('=====DEQUEUE=====\n');

console.log('\n=============');
console.log('     Queue     ');
console.log('=============\n');
