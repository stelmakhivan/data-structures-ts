import { MaxBinaryHeap } from 'data-structures-ts';

describe('MaxBinaryHeap', () => {
  let maxBinaryHeap: MaxBinaryHeap<number>;

  beforeEach(() => {
    maxBinaryHeap = new MaxBinaryHeap<number>();
  });

  test('insert - adds a value to the max binary heap', () => {
    maxBinaryHeap.insert(10);
    maxBinaryHeap.insert(5);
    maxBinaryHeap.insert(15);

    expect(maxBinaryHeap.values).toEqual([15, 5, 10]);
  });

  test('extractMax - removes and returns the maximum value from the max binary heap', () => {
    maxBinaryHeap.insert(10);
    maxBinaryHeap.insert(5);
    maxBinaryHeap.insert(15);

    const result = maxBinaryHeap.extractMax();

    expect(result).toBe(15);
    expect(maxBinaryHeap.values).toEqual([10, 5]);
  });

  test('extractMax - returns null if the max binary heap is empty', () => {
    const result = maxBinaryHeap.extractMax();

    expect(result).toBe(null);
    expect(maxBinaryHeap.values).toEqual([]);
  });

  test('extractMax - maintains the max binary heap property after extraction', () => {
    maxBinaryHeap.insert(10);
    maxBinaryHeap.insert(5);
    maxBinaryHeap.insert(15);
    maxBinaryHeap.insert(3);

    maxBinaryHeap.extractMax();

    expect(maxBinaryHeap.values).toEqual([10, 5, 3]);
  });

  test('extractMax - maintains the max binary heap property after multiple extractions', () => {
    maxBinaryHeap.insert(10);
    maxBinaryHeap.insert(5);
    maxBinaryHeap.insert(15);
    maxBinaryHeap.insert(3);

    maxBinaryHeap.extractMax();
    maxBinaryHeap.extractMax();

    expect(maxBinaryHeap.values).toEqual([5, 3]);
  });
});
