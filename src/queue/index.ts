/**
 * Represents a node in a queue.
 * @template T - The type of the value stored in the node.
 */
class Node<T> {
  /**
   * Creates a new node with the given value and optional reference to the next node.
   * @param {T} value - The value to be stored in the node.
   * @param {Node<T> | null} next - The reference to the next node in the queue.
   */
  constructor(
    public value: T,
    public next: Node<T> | null = null,
  ) {}
}

// https://visualgo.net/en/list
/* Big O of Queues
  - Insertion - O(1)
  - Removal - O(1)
  - Search - O(n)
  - Access - O(n)
*/

/**
 * Represents a queue data structure.
 * @template T - The type of elements stored in the queue.
 */
export class Queue<T> {
  /**
   * Creates a new queue.
   * @param {Node<T> | null} first - The reference to the front node in the queue.
   * @param {Node<T> | null} last - The reference to the rear node in the queue.
   * @param {number} size - The number of elements in the queue.
   */
  constructor(
    public first: Node<T> | null = null,
    public last: Node<T> | null = null,
    public size: number = 0,
  ) {}

  /**
   * Adds a new element with the given value to the rear of the queue.
   * @param {T} value - The value to be added to the queue.
   * @returns {number} - The updated size of the queue.
   */
  enqueue(value: T): number {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  /**
   * Removes and returns the element from the front of the queue.
   * @returns {T | null} - The removed value.
   */
  dequeue(): T | null {
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
