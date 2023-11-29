/**
 * Represents a node in a binary search tree.
 * @template T - The type of the value stored in the node.
 */
class Node<T> {
  /**
   * Creates a new node with the given value and optional left and right children.
   * @param {T} value - The value to be stored in the node.
   * @param {Node<T> | null} left - The left child node.
   * @param {Node<T> | null} right - The right child node.
   */
  constructor(
    public value: T,
    public left: Node<T> | null = null,
    public right: Node<T> | null = null,
  ) {}
}

// https://visualgo.net/en/bst
/* Big O of Binary Search Trees
  - Insertion - O(log n)
  - Searching - O(log n)
  - NOT guaranteed (because of the tree's shape, f.e. if we insert 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 in order,
    we'll get a one-sided tree, which will have O(n) for insertion and searching)
*/

/**
 * Represents a binary search tree data structure.
 * @template T - The type of elements stored in the binary search tree.
 */
export class BinarySearchTree<T> {
  /**
   * Creates a new binary search tree with an optional root node.
   * @param {Node<T> | null} root - The root node of the binary search tree.
   */
  constructor(public root: Node<T> | null = null) {}

  /**
   * Inserts a new value into the binary search tree.
   * @param {T} value - The value to be inserted.
   * @returns {this | undefined} - The updated binary search tree or undefined if the value already exists.
   */
  insert(value: T): this | undefined {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /**
   * Finds a node with the specified value in the binary search tree.
   * @param {T} value - The value to search for.
   * @returns {Node<T> | boolean} - The found node or false if the value is not in the tree.
   */
  find(value: T): Node<T> | boolean {
    if (this.root === null) return false;
    let current = this.root,
      found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left!;
      } else if (value > current.value) {
        current = current.right!;
      } else {
        found = true;
      }
    }

    if (!found) return false;

    return current;
  }

  /**
   * Performs a breadth-first search on the binary search tree.
   * @returns {T[]} - An array of values traversed in breadth-first order.
   */
  breadthFirstSearch(): T[] {
    const data: T[] = [];
    const queue: Node<T>[] = [];

    let node = this.root;

    if (!node) {
      return data;
    }

    queue.push(node);

    while (queue.length) {
      node = queue.shift() ?? null;
      if (!node) break;

      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  /**
   * Performs a depth-first search on the binary search tree in pre-order.
   * @returns {T[]} - An array of values traversed in pre-order.
   */
  depthFirstSearchPreOrder(): T[] {
    const data: T[] = [];

    function traverse(node: Node<T> | null) {
      if (!node) return;
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  /**
   * Performs a depth-first search on the binary search tree in post-order.
   * @returns {T[]} - An array of values traversed in post-order.
   */
  depthFirstSearchPostOrder(): T[] {
    const data: T[] = [];

    function traverse(node: Node<T> | null) {
      if (!node) return;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);

    return data;
  }

  /**
   * Performs a depth-first search on the binary search tree in in-order.
   * @returns {T[]} - An array of values traversed in in-order.
   */
  depthFirstSearchInOrder(): T[] {
    const data: T[] = [];

    function traverse(node: Node<T> | null) {
      if (!node) return;
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }
}
