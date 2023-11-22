import console from 'node:console';
import { MaxBinaryHeap } from 'data-structures-ts';

console.log('\n=====================');
console.log('     MaxBinaryHeap     ');
console.log('=====================');

const heap = new MaxBinaryHeap<number>();

console.log('\n=====INSERT=====');
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);

console.log(heap);

heap.insert(55);

console.log(heap);

heap.insert(1);
heap.insert(45);

console.log(heap);
console.log('=====INSERT=====\n');

console.log('\n=====EXTRACT MAX=====');
console.log(heap.extractMax());
console.log(heap);
console.log('=====EXTRACT MAX=====\n');

console.log('\n=====================');
console.log('     MaxBinaryHeap     ');
console.log('=====================\n');
