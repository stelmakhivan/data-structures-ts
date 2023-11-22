import console from 'node:console';

class Node<T> {
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

export class SinglyLinkedList<T = never> {
  constructor(
    public head: Node<T> | null = null,
    public tail: Node<T> | null = null,
    public length: number = 0,
  ) {}

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

  set(index: number, value: T): boolean {
    const newNode = this.get(index);
    if (!newNode) return false;

    newNode.value = value;
    return true;
  }

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

  toArray(): T[] {
    const array: T[] = [];
    let currentNode = this.head;

    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  print(): void {
    console.log(this.toArray());
  }
}
