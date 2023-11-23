import console from 'node:console';
import { HashTable } from 'data-structures-ts';

console.log('\n=================');
console.log('     HashTable     ');
console.log('=================');

const ht = new HashTable(17);

ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('plum', '#DDA0DD');

console.log(ht.keyMap);

console.log(ht.get('yellow'));
console.log(ht.get('maroon'));
console.log(ht.get('plum'));

console.log('Values - ', ht.values());
console.log('Keys - ', ht.keys());

console.log('\n=================');
console.log('     HashTable     ');
console.log('=================\n');
