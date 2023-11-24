import console from 'node:console';
import { WeightedGraph } from 'data-structures-ts';

console.log('\n=====================');
console.log('     WeightedGraph     ');
console.log('=====================');
const graph = new WeightedGraph();

console.log('\n=====ADD VERTEX=====');
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
console.log(graph);
console.log('=====ADD VERTEX=====\n');

console.log('\n=====ADD EDGE=====');
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);
console.log(graph);
console.log('=====ADD EDGE=====\n');

console.log(graph.adjacencyList.A);
console.log(graph.adjacencyList.B);
console.log(graph.adjacencyList.C);

console.log('\n=====================');
console.log('     WeightedGraph     ');
console.log('=====================\n');

console.log('\n=====Dijkstra=====');
console.log(graph.Dijkstra('A', 'E'));
console.log(graph.Dijkstra('A', 'C'));
console.log(graph.Dijkstra('A', 'F'));
console.log(graph.Dijkstra('A', 'D'));
console.log('=====Dijkstra=====\n');
