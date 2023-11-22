// https://visualgo.net/en/heap
/* Big O of Binary Heaps
   - Insertion - O(log n)
   - Removal - O(log n)
   - Search - O(n)
 */

export class MaxBinaryHeap<T> {
  constructor(public values: T[] = []) {}

  insert(value: T): this {
    this.values.push(value);

    this.bubbleUp();

    return this;
  }

  bubbleUp(): this {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];

      if (element <= parent) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }

    return this;
  }

  extractMax(): T | null {
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
      let leftChild: T | null = null;
      let rightChild: T | null = null;

      let swap: number | null = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];

        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if ((swap === null && rightChild > element) || (swap !== null && !!leftChild && rightChild > leftChild)) {
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
