import { PriorityQueue } from '@/binary-heap';

export class WeightedGraph {
  constructor(public adjacencyList: Record<string, { node: string; weight: number }[]> = {}) {}

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1: string, vertex2: string, weight: number) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

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
