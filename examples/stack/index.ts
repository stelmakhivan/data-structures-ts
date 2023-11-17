import console from 'node:console';
import { Stack } from 'data-structures-ts';

console.log('\n===============');
console.log('     Stack     ');
console.log('===============');

console.log('\n=====PUSH=====');
const stack = new Stack<number>();
console.log(stack);
stack.push(2);
console.log(stack);
stack.push(4);
console.log(stack);
console.log('=====PUSH=====\n');

console.log('\n=====POP=====');
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
console.log('=====POP=====\n');

console.log('\n=============');
console.log('     Stack     ');
console.log('=============\n');
