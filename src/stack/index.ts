/**
 * Represents a node in a stack.
 * @template T - The type of the value stored in the node.
 */
class Node<T> {
  /**
   * Creates a new node with the given value and optional reference to the next node.
   * @param {T} value - The value to be stored in the node.
   * @param {Node<T> | null} next - The reference to the next node in the stack.
   */
  constructor(
    public value: T,
    public next: Node<T> | null = null,
  ) {}
}

// https://visualgo.net/en/list
/* Big O of Stacks
  - Insertion - O(1)
  - Removal - O(1)
  - Search - O(n)
  - Access - O(n)
*/

/**
 * Represents a stack data structure.
 * @template T - The type of elements stored in the stack.
 */
export class Stack<T> {
  /**
   * Creates a new stack.
   * @param {Node<T> | null} first - The reference to the top node in the stack.
   * @param {Node<T> | null} last - The reference to the bottom node in the stack.
   * @param {number} size - The number of elements in the stack.
   */
  constructor(
    public first: Node<T> | null = null,
    public last: Node<T> | null = null,
    public size: number = 0,
  ) {}

  /**
   * Adds a new element with the given value to the top of the stack.
   * @param {T} value - The value to be added to the stack.
   * @returns {number} - The updated size of the stack.
   */
  push(value: T): number {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  /**
   * Removes and returns the element from the top of the stack.
   * @returns {T | null} - The removed value.
   */
  pop(): T | null {
    if (!this.first) return null;
    const temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}
