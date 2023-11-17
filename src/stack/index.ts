class Node<T> {
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

export class Stack<T> {
  constructor(
    public first: Node<T> | null = null,
    public last: Node<T> | null = null,
    public size: number = 0,
  ) {}

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
