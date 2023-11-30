import console from 'node:console';
import { DoublyLinkedList } from 'data-structures-ts';

describe('DoublyLinkedList', () => {
  let list: DoublyLinkedList<number>;

  beforeEach(() => {
    list = new DoublyLinkedList<number>();
  });

  test('push - adds a new node to the end of the list', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    expect(list.length).toBe(3);
    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(3);
  });

  test('pop - removes and returns the last node from the list', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    const poppedNode = list.pop();

    expect(list.length).toBe(2);
    expect(poppedNode?.value).toBe(3);
    expect(list.tail?.value).toBe(2);
  });

  test('shift - removes and returns the first node from the list', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    const shiftedNode = list.shift();

    expect(list.length).toBe(2);
    expect(shiftedNode?.value).toBe(1);
    expect(list.head?.value).toBe(2);
  });

  test('unshift - adds a new node to the beginning of the list', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    list.unshift(0);

    expect(list.length).toBe(4);
    expect(list.head?.value).toBe(0);
  });

  test('get - retrieves the node at the specified index', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    const nodeAtIndex = list.get(1);

    expect(nodeAtIndex?.value).toBe(2);
  });

  test('set - updates the value of the node at the specified index', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    const updated = list.set(1, 5);

    expect(updated).toBe(true);
    expect(list.get(1)?.value).toBe(5);
  });

  test('insert - adds a new node at the specified index', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    list.insert(1, 5);

    expect(list.length).toBe(4);
    expect(list.get(1)?.value).toBe(5);
    expect(list.get(2)?.value).toBe(2);
  });

  test('remove - deletes the node at the specified index', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    const removed = list.remove(1);

    expect(removed?.value).toBe(2);
    expect(list.length).toBe(2);
    expect(list.get(1)?.value).toBe(3);
  });

  test('reverse - reverses the order of nodes in the list', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    list.reverse();

    expect(list.toArray()).toEqual([3, 2, 1]);
  });

  test('toArray - converts the linked list to an array', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('print - prints the elements of the linked list to the console', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    list.push(1);
    list.push(2);
    list.push(3);

    list.print();

    expect(consoleSpy).toHaveBeenCalledWith([1, 2, 3]);

    consoleSpy.mockRestore();
  });
});
