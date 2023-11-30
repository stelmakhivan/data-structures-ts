import { PriorityQueue, PriorityQueueNode } from 'data-structures-ts';

describe('PriorityQueue', () => {
  let priorityQueue: PriorityQueue<number>;

  beforeEach(() => {
    priorityQueue = new PriorityQueue<number>();
  });

  test('enqueue - adds a node to the priority queue', () => {
    priorityQueue.enqueue(10, 2);
    priorityQueue.enqueue(5, 1);
    priorityQueue.enqueue(15, 3);

    expect(priorityQueue.values).toEqual([
      new PriorityQueueNode(5, 1),
      new PriorityQueueNode(10, 2),
      new PriorityQueueNode(15, 3),
    ]);
  });

  test('dequeue - removes and returns the highest priority node from the priority queue', () => {
    priorityQueue.enqueue(10, 2);
    priorityQueue.enqueue(5, 1);
    priorityQueue.enqueue(15, 3);

    const result = priorityQueue.dequeue();

    expect(result).toEqual(new PriorityQueueNode(5, 1));
    expect(priorityQueue.values).toEqual([
      new PriorityQueueNode(15, 3),
      new PriorityQueueNode(10, 2),
    ]);
  });

  test('dequeue - returns null if the priority queue is empty', () => {
    const result = priorityQueue.dequeue();

    expect(result).toBe(null);
    expect(priorityQueue.values).toEqual([]);
  });

  test('dequeue - maintains the priority queue property after extraction', () => {
    priorityQueue.enqueue(10, 2);
    priorityQueue.enqueue(5, 1);
    priorityQueue.enqueue(15, 3);
    priorityQueue.enqueue(3, 1);

    priorityQueue.dequeue();

    expect(priorityQueue.values).toEqual([
      new PriorityQueueNode(15, 3),
      new PriorityQueueNode(3, 1),
      new PriorityQueueNode(10, 2),
    ]);
  });

  test('dequeue - maintains the priority queue property after multiple extractions', () => {
    priorityQueue.enqueue(10, 2);
    priorityQueue.enqueue(5, 1);
    priorityQueue.enqueue(15, 3);
    priorityQueue.enqueue(3, 1);

    priorityQueue.dequeue();
    priorityQueue.dequeue();

    expect(priorityQueue.values).toEqual([
      new PriorityQueueNode(10, 2),
      new PriorityQueueNode(3, 1),
    ]);
  });
});
