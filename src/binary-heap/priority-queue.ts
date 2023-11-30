/**
 * Represents a node in a priority queue.
 * @template T - The type of the value stored in the node.
 */
export class PriorityQueueNode<T> {
  /**
   * Creates a new node with the given value and priority.
   * @param {T} value - The value to be stored in the node.
   * @param {number} priority - The priority associated with the value.
   */
  constructor(
    public value: T,
    public priority: number,
  ) {}
}

// https://visualgo.net/en/heap

/**
 * Represents a priority queue data structure.
 * @template T - The type of elements stored in the priority queue.
 */
export class PriorityQueue<T> {
  /**
   * Creates a new priority queue.
   * @param {Node<T>[]} values - An array of nodes to initialize the priority queue.
   */
  constructor(public values: PriorityQueueNode<T>[] = []) {}

  /**
   * Adds a new value with the specified priority to the priority queue.
   * @param {T} value - The value to be added.
   * @param {number} priority - The priority associated with the value.
   * @returns {this} - The updated priority queue.
   */
  enqueue(value: T, priority: number): this {
    const newNode = new PriorityQueueNode(value, priority);

    this.values.push(newNode);

    this.bubbleUp();

    return this;
  }

  /**
   * Moves the last element in the priority queue to its correct position to maintain the heap property.
   * @returns {this} - The updated priority queue.
   */
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

  /**
   * Removes and returns the element with the highest priority from the priority queue.
   * @returns {Node<T> | null} - The removed node, or null if the priority queue is empty.
   */
  dequeue(): PriorityQueueNode<T> | null {
    const max = this.values[0] ?? null;
    const end = this.values.pop();

    if (this.values.length > 0 && !!end) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  /**
   * Moves the root element down to its correct position to maintain the heap property.
   * @returns {this} - The updated priority queue.
   */
  sinkDown(): this {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild: PriorityQueueNode<T> | null = null;
      let rightChild: PriorityQueueNode<T> | null = null;

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
