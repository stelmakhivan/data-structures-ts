// https://visualgo.net/en/graphds
// https://visualgo.net/en/dfsbfs

/*
 * Big O of Graphs
 * |V| = number of vertices
 * |E| = number of edges
 *
 * Adjacency List
 * - Space Complexity: O(|V| + |E|)
 * - Add Vertex: O(1)
 * - Add Edge: O(1)
 * - Remove Vertex: O(|V| + |E|)
 * - Remove Edge: O(|E|)
 * - Query: O(|V| + |E|)
 * - Storage: O(|V| + |E|)
 *
 * Adjacency Matrix
 * - Space Complexity: O(|V|^2)
 * - Add Vertex: O(|V|^2)
 * - Add Edge: O(1)
 * - Remove Vertex: O(|V|^2)
 * - Remove Edge: O(1)
 * - Query: O(1)
 * - Storage: O(|V|^2)
 * */

/**
 * Represents a graph data structure using an adjacency list.
 */
export class Graph {
  /**
   * Creates a new graph with an optional initial adjacency list.
   * @param {Record<string, string[]>} adjacencyList - The initial adjacency list.
   */
  constructor(public adjacencyList: Record<string, string[]> = {}) {}

  /**
   * Adds a new vertex to the graph.
   * @param {string} vertex - The name of the vertex to be added.
   */
  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  /**
   * Adds an undirected edge between two vertices in the graph.
   * @param {string} vertex1 - The first vertex.
   * @param {string} vertex2 - The second vertex.
   */
  addEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  /**
   * Removes an undirected edge between two vertices in the graph.
   * @param {string} vertex1 - The first vertex.
   * @param {string} vertex2 - The second vertex.
   */
  removeEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
  }

  /**
   * Removes a vertex and its associated edges from the graph.
   * @param {string} vertex - The vertex to be removed.
   */
  removeVertex(vertex: string) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()!;
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  /**
   * Performs a depth-first traversal of the graph using recursion.
   * @param {string} start - The starting vertex for the traversal.
   * @returns {string[]} - An array of vertices visited in depth-first order.
   */
  depthFirstRecursive(start: string): string[] {
    const result: string[] = [];
    const visited: Record<string, boolean> = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex: string) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);

    return result;
  }

  /**
   * Performs a depth-first traversal of the graph using iteration.
   * @param {string} start - The starting vertex for the traversal.
   * @returns {string[]} - An array of vertices visited in depth-first order.
   */
  depthFirstIterative(start: string): string[] {
    const stack = [start];
    const result: string[] = [];
    const visited: Record<string, boolean> = {};

    visited[start] = true;

    while (stack.length) {
      const vertex = stack.pop()!;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  /**
   * Performs a breadth-first traversal of the graph.
   * @param {string} start - The starting vertex for the traversal.
   * @returns {string[]} - An array of vertices visited in breadth-first order.
   */
  breadthFirst(start: string): string[] {
    const queue = [start];
    const result: string[] = [];
    const visited: Record<string, boolean> = {};
    let currentVertex: string;

    while (queue.length) {
      currentVertex = queue.shift()!;
      result.push(currentVertex);
      visited[currentVertex] = true;

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}
