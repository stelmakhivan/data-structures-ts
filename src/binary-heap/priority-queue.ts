class Node<T> {
  constructor(
    public value: T,
    public priority: number,
  ) {}
}

// https://visualgo.net/en/heap

export class PriorityQueue<T> {
  constructor(public values: Node<T>[] = []) {}

  enqueue(value: T, priority: number): this {
    const newNode = new Node(value, priority);

    this.values.push(newNode);

    this.bubbleUp();

    return this;
  }

  bubbleUp(): this {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];

      if (element.priority >= parent.priority) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }

    return this;
  }

  dequeue(): Node<T> | null {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0 && !!end) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown(): this {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild: Node<T> | null = null;
      let rightChild: Node<T> | null = null;

      let swap: number | null = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];

        if (leftChild.priority > element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && !!leftChild && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }

    return this;
  }
}
