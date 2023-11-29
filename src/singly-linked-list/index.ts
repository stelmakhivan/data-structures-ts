import console from 'node:console';

/**
 * Represents a node in a singly linked list.
 * @template T - The type of the value stored in the node.
 */
class Node<T> {
  /**
   * Creates a new node with the given value and optional next node reference.
   * @param {T} value - The value to be stored in the node.
   * @param {Node<T> | null} next - The reference to the next node in the list.
   */
  constructor(
    public value: T,
    public next: Node<T> | null = null,
  ) {}
}

// https://visualgo.net/en/list
/* Big O of Singly Linked Lists
  - Insertion - O(1)
  - Removal - O(n)
  - Search - O(n)
  - Access - O(n)
*/

/**
 * Represents a singly linked list.
 * @template T - The type of elements stored in the list.
 */
export class SinglyLinkedList<T = never> {
  /**
   * Creates a new singly linked list.
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
    if (!this.head) return undefined;
    let currentNode = this.head;
    let newTail = currentNode;

    while (currentNode.next) {
      newTail = currentNode; // newTail is always one step behind current
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }

  /**
   * Removes and returns the first node from the list.
   * @returns {Node<T> | undefined} - The removed node.
   */
  shift(): Node<T> | undefined {
    if (!this.head) return undefined;

    const currentHead = this.head;
    this.head = currentHead.next;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

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
      this.tail = this.head;
    } else {
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

    let counter = 0;
    let currentNode = this.head;

    while (counter !== index && currentNode) {
      currentNode = currentNode.next;
      counter++;
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
    const newNode = this.get(index);
    if (!newNode) return false;

    newNode.value = value;
    return true;
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
    const prevNode = this.get(index - 1);
    const temp = prevNode!.next;
    prevNode!.next = newNode;
    newNode.next = temp;

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

    const prevNode = this.get(index - 1);
    const removedNode = prevNode!.next;
    prevNode!.next = removedNode!.next;

    this.length--;

    return removedNode!;
  }

  /**
   * Reverses the order of nodes in the list.
   * @returns {this} - The reversed linked list.
   */
  reverse(): this {
    if (!this.head) {
      return this;
    }
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prevNode: Node<T> | null = null;
    let nextNode: Node<T> | null = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = node.next!;
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
    }

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
