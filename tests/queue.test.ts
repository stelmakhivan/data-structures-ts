import { Queue } from 'data-structures-ts';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test('enqueue - adds a new element to the rear of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.size).toBe(2);
    expect(queue.first?.value).toBe(1);
    expect(queue.last?.value).toBe(2);
  });

  test('dequeue - removes and returns the element from the front of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);

    const dequeuedValue = queue.dequeue();

    expect(dequeuedValue).toBe(1);
    expect(queue.size).toBe(1);
    expect(queue.first?.value).toBe(2);
  });

  test('dequeue - returns null if the queue is empty', () => {
    const dequeuedValue = queue.dequeue();

    expect(dequeuedValue).toBeNull();
    expect(queue.size).toBe(0);
  });

  test('enqueue and dequeue maintain the correct queue order', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    const dequeuedValue1 = queue.dequeue();
    const dequeuedValue2 = queue.dequeue();

    expect(dequeuedValue1).toBe(1);
    expect(dequeuedValue2).toBe(2);
    expect(queue.size).toBe(1);
    expect(queue.first?.value).toBe(3);
  });
});
