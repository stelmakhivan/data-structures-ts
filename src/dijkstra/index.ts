import { PriorityQueue } from '@/binary-heap';

/**
 * Represents a weighted graph data structure using an adjacency list.
 */
export class WeightedGraph {
  /**
   * Creates a new weighted graph with an optional initial adjacency list.
   * @param {Record<string, { node: string; weight: number }[]>} adjacencyList - The initial adjacency list.
   */
  constructor(public adjacencyList: Record<string, { node: string; weight: number }[]> = {}) {}

  /**
   * Adds a new vertex to the weighted graph.
   * @param {string} vertex - The name of the vertex to be added.
   */
  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  /**
   * Adds a weighted edge between two vertices in the weighted graph.
   * @param {string} vertex1 - The first vertex.
   * @param {string} vertex2 - The second vertex.
   * @param {number} weight - The weight of the edge between the vertices.
   */
  addEdge(vertex1: string, vertex2: string, weight: number) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  /**
   * Finds the shortest path in the weighted graph using Dijkstra's algorithm.
   * @param {string} start - The starting vertex for the shortest path.
   * @param {string} finish - The destination vertex for the shortest path.
   * @returns {string[]} - An array representing the vertices in the shortest path.
   */
  Dijkstra(start: string, finish: string): string[] {
    const nodes = new PriorityQueue<string>();
    const distances: Record<string, number> = {};
    const previous: Record<string, string | null> = {};
    let smallest: string | undefined;
    const path: string[] = []; // to return at end

    // build up initial state
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue()?.value;
      if (smallest === finish) {
        while (previous[smallest!]) {
          path.push(smallest!);
          smallest = previous[smallest!] ?? undefined;
        }
        break;
      }
      if (smallest && distances[smallest] !== Infinity) {
        for (const neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          const nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          const candidate = distances[smallest] + nextNode.weight;

          const nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest!).reverse();
  }
}
