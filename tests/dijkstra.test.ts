import { WeightedGraph } from 'data-structures-ts';

describe('WeightedGraph', () => {
  let weightedGraph: WeightedGraph;

  beforeEach(() => {
    weightedGraph = new WeightedGraph();
  });

  test('addVertex adds a vertex to the weighted graph', () => {
    weightedGraph.addVertex('A');
    expect(weightedGraph.adjacencyList).toEqual({ A: [] });
  });

  test('addEdge adds a weighted edge between two vertices', () => {
    weightedGraph.addVertex('A');
    weightedGraph.addVertex('B');
    weightedGraph.addEdge('A', 'B', 3);
    expect(weightedGraph.adjacencyList).toEqual({ A: [{ node: 'B', weight: 3 }], B: [{ node: 'A', weight: 3 }] });
  });

  test('Dijkstra finds the shortest path in the weighted graph using Dijkstra\'s algorithm', () => {
    weightedGraph.addVertex('A');
    weightedGraph.addVertex('B');
    weightedGraph.addVertex('C');
    weightedGraph.addEdge('A', 'B', 1);
    weightedGraph.addEdge('B', 'C', 2);
    weightedGraph.addEdge('A', 'C', 4);

    expect(weightedGraph.Dijkstra('A', 'C')).toEqual(['A', 'B', 'C']);
  });
});
