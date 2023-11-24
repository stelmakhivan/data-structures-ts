import console from 'node:console';
import { Graph } from 'data-structures-ts';

console.log('\n=============');
console.log('     Graph     ');
console.log('=============');

const graph = new Graph();

console.log('\n=====ADD VERTEX=====');
graph.addVertex('Dallas');
graph.addVertex('Tokyo');
graph.addVertex('Aspen');
console.log(graph);
console.log('=====ADD VERTEX=====\n');

console.log('\n=====ADD EDGE=====');
graph.addEdge('Dallas', 'Tokyo');
graph.addEdge('Dallas', 'Aspen');
console.log(graph);
console.log('=====ADD EDGE=====\n');

console.log('\n=====REMOVE EDGE=====');
graph.removeEdge('Dallas', 'Aspen');
console.log(graph);
graph.addVertex('Hong Kong');
graph.addEdge('Hong Kong', 'Dallas');
graph.addEdge('Hong Kong', 'Tokyo');
console.log(graph);
console.log('=====REMOVE EDGE=====\n');

console.log('\n=====REMOVE VERTEX=====');
graph.removeVertex('Hong Kong');
console.log(graph);
console.log('=====REMOVE VERTEX=====\n');

console.log('\n=====DEPTH FIRST RECURSIVE=====');
graph.addVertex('Dallas');
graph.addVertex('Tokyo');
graph.addVertex('Aspen');
graph.addVertex('Hong Kong');
graph.addVertex('Los Angeles');
graph.addVertex('San Francisco');
graph.addEdge('Dallas', 'Tokyo');
graph.addEdge('Dallas', 'Aspen');
graph.addEdge('Hong Kong', 'Tokyo');

console.log(graph.depthFirstRecursive('Tokyo'));
console.log(graph.depthFirstRecursive('San Francisco'));
console.log('=====DEPTH FIRST RECURSIVE=====\n');

console.log('\n=====DEPTH FIRST ITERATIVE=====');
console.log(graph.depthFirstIterative('Tokyo'));
console.log(graph.depthFirstIterative('San Francisco'));
console.log('=====DEPTH FIRST ITERATIVE=====\n');

console.log('\n=====BREADTH FIRST=====');
console.log(graph.breadthFirst('Tokyo'));
console.log(graph.breadthFirst('San Francisco'));
console.log('=====BREADTH FIRST=====\n');

console.log('\n=============');
console.log('     Graph     ');
console.log('=============\n');
