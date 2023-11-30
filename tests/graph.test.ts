import { Graph } from 'data-structures-ts';

describe('Graph', () => {
  let graph: Graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('addVertex - adds a vertex to the graph', () => {
    graph.addVertex('A');
    expect(graph.adjacencyList).toEqual({ A: [] });
  });

  test('addEdge - adds an undirected edge between two vertices', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    expect(graph.adjacencyList).toEqual({ A: ['B'], B: ['A'] });
  });

  test('removeEdge - removes an undirected edge between two vertices', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    graph.removeEdge('A', 'B');
    expect(graph.adjacencyList).toEqual({ A: [], B: [] });
  });

  test('removeVertex - removes a vertex and its associated edges from the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    graph.removeVertex('A');
    expect(graph.adjacencyList).toEqual({ B: [] });
  });

  test('depthFirstRecursive - performs a depth-first traversal of the graph using recursion', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'A');

    expect(graph.depthFirstRecursive('A')).toEqual(['A', 'B', 'C']);
  });

  test('depthFirstIterative - performs a depth-first traversal of the graph using iteration', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'A');

    expect(graph.depthFirstIterative('A')).toEqual(['A', 'C', 'B']);
  });

  test('breadthFirst - performs a breadth-first traversal of the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'A');

    expect(graph.breadthFirst('A')).toEqual(['A', 'B', 'C']);
  });
});
