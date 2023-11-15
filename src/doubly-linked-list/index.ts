import console from 'node:console';

class Node<T> {
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

export class DoublyLinkedList<T = never> {
  constructor(
    public head: Node<T> | null = null,
    public tail: Node<T> | null = null,
    public length: number = 0,
  ) {}

  push(value: T): DoublyLinkedList<T> {
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

  unshift(value: T): DoublyLinkedList<T> {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head!.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

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

  set(index: number, value: T): boolean {
    const foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

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

  reverse(): DoublyLinkedList<T> {
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
