import console from 'node:console';
import { DoublyLinkedList } from 'data-structures-ts';

console.log('\n========================');
console.log('     DoublyLinkedList     ');
console.log('========================');

let list = new DoublyLinkedList<string>();
console.log(list);

function updateList(): void {
  list = new DoublyLinkedList<string>();
  list.push('Hello!');
  list.push('How');
  list.push('are');
  list.push('you?');
  console.log(list);
}

console.log('\n=====POP=====');
updateList();
list.pop();
console.log(list);
list.pop();
console.log(list);
list.pop();
console.log(list);
list.pop();
console.log(list);
console.log('=====POP=====\n');

console.log('\n=====SHIFT=====');
updateList();
list.shift();
console.log(list);
list.shift();
console.log(list);
list.shift();
console.log(list);
list.shift();
console.log(list);
console.log('=====SHIFT=====\n');

console.log('\n=====UNSHIFT=====');
updateList();
list.unshift('First');
console.log(list);
console.log('=====UNSHIFT=====\n');

console.log('\n=====GET=====');
updateList();
console.log(list.get(0));
console.log(list.get(3));
console.log('=====GET=====\n');

console.log('\n=====SET=====');
updateList();
list.set(0, 'First');
console.log(list);
console.log(list.get(0));
console.log('=====SET=====\n');

console.log('\n=====INSERT=====');
updateList();
list.insert(0, 'First');
console.log(list);
console.log(list.get(0));
list.insert(4, 'Fourth');
console.log(list.get(3));
console.log(list.get(4));
console.log(list.get(5));
console.log('=====INSERT=====\n');

console.log('\n=====REMOVE=====');
updateList();
list.remove(0);
console.log(list);
list.remove(1);
console.log(list);
console.log('=====REMOVE=====\n');

console.log('\n=====REVERSE=====');
updateList();
list.print();
list.reverse();
list.print();
console.log('=====REVERSE=====\n');

console.log('\n========================');
console.log('     DoublyLinkedList     ');
console.log('========================\n');
