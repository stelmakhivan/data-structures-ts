class Node<T> {
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

export class BinarySearchTree<T> {
  constructor(public root: Node<T> | null = null) {}

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