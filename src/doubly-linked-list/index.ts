import console from 'node:console';

/**
 * Represents a node in a doubly linked list.
 * @template T - The type of the value stored in the node.
 */
class Node<T> {
  /**
   * Creates a new node with the given value, previous node reference, and next node reference.
   * @param {T} value - The value to be stored in the node.
   * @param {Node<T> | null} prev - The reference to the previous node in the list.
   * @param {Node<T> | null} next - The reference to the next node in the list.
   */
  constructor(
    public value: T,
    public prev: Node<T> | null = null,
    public next: Node<T> | null = null,
  ) {}
}

// https://visualgo.net/en/list
/* Big O of Doubly Linked Lists
  - Insertion - O(1)
  - Removal - O(1)
  - Search - O(n) (O(n/2) but that's still O(n))
  - Access - O(n)
*/

/**
 * Represents a doubly linked list.
 * @template T - The type of elements stored in the list.
 */
export class DoublyLinkedList<T = never> {
  /**
   * Creates a new doubly linked list.
   * @param {Node<T> | null} head - The reference to the first node in the list.
   * @param {Node<T> | null} tail - The reference to the last node in the list.
   * @param {number} length - The number of nodes in the list.
   */
  constructor(
    public head: Node<T> | null = null,
    public tail: Node<T> | null = null,
    public length: number = 0,
  ) {}

  /**
   * Adds a new node with the given value to the end of the list.
   * @param {T} value - The value to be added to the list.
   * @returns {this} - The updated linked list.
   */
  push(value: T): this {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  /**
   * Removes and returns the last node from the list.
   * @returns {Node<T> | undefined} - The removed node.
   */
  pop(): Node<T> | undefined {
    if (!this.tail) return undefined;
    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail!.next = null;
      poppedNode.prev = null;
    }
    this.length--;

    return poppedNode;
  }

  /**
   * Removes and returns the first node from the list.
   * @returns {Node<T> | undefined} - The removed node.
   */
  shift(): Node<T> | undefined {
    if (!this.head) return undefined;

    const currentHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      this.head!.prev = null;
      currentHead.next = null;
    }

    this.length--;

    return currentHead;
  }

  /**
   * Adds a new node with the given value to the beginning of the list.
   * @param {T} value - The value to be added to the list.
   * @returns {this} - The updated linked list.
   */
  unshift(value: T): this {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  /**
   * Gets the node at the specified index in the list.
   * @param {number} index - The index of the node to retrieve.
   * @returns {Node<T> | null} - The node at the specified index.
   */
  get(index: number): Node<T> | null {
    if (index < 0 || index >= this.length) return null;

    let count: number;
    let currentNode: Node<T> | null;

    if (index <= this.length / 2) {
      count = 0;
      currentNode = this.head;
      while (count !== index && currentNode) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      currentNode = this.tail;
      while (count !== index && currentNode) {
        currentNode = currentNode.prev;
        count--;
      }
    }

    return currentNode;
  }

  /**
   * Updates the value of the node at the specified index in the list.
   * @param {number} index - The index of the node to update.
   * @param {T} value - The new value to set.
   * @returns {boolean} - True if the update is successful, false otherwise.
   */
  set(index: number, value: T): boolean {
    const foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  /**
   * Inserts a new node with the given value at the specified index in the list.
   * @param {number} index - The index at which to insert the new node.
   * @param {T} value - The value to be added to the list.
   * @returns {boolean} - True if the insertion is successful, false otherwise.
   */
  insert(index: number, value: T): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return Boolean(this.push(value));
    if (index === 0) return Boolean(this.unshift(value));

    const newNode = new Node(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode!.next;

    beforeNode!.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode!.prev = newNode;

    this.length++;

    return true;
  }

  /**
   * Removes the node at the specified index from the list.
   * @param {number} index - The index of the node to remove.
   * @returns {Node<T> | undefined} - The removed node.
   */
  remove(index: number): Node<T> | undefined {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index)!;

    const beforeNode = removedNode.prev!;
    const afterNode = removedNode.next!;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;

    return removedNode;
  }

  /**
   * Reverses the order of nodes in the list.
   * @returns {this} - The reversed linked list.
   */
  reverse(): this {
    if (!this.head) {
      return this;
    }

    let currentNode: Node<T> | null = this.head;
    let nextNode: Node<T> | null = null;
    let prevNode: Node<T> | null = null;

    while (currentNode) {
      nextNode = currentNode.next;
      prevNode = currentNode.prev;

      currentNode.next = prevNode;
      currentNode.prev = nextNode;

      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode!;

    return this;
  }

  /**
   * Converts the linked list to an array.
   * @returns {T[]} - The array representation of the linked list.
   */
  toArray(): T[] {
    const array: T[] = [];
    let currentNode = this.head;

    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  /**
   * Prints the elements of the linked list to the console.
   * @returns {void}
   */
  print(): void {
    console.log(this.toArray());
  }
}
