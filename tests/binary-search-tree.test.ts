import { BinarySearchTree } from 'data-structures-ts';

describe('BinarySearchTree', () => {
  let binarySearchTree: BinarySearchTree<number>;

  beforeEach(() => {
    binarySearchTree = new BinarySearchTree<number>();
  });

  test('insert - adds a value to the binary search tree', () => {
    binarySearchTree.insert(10);
    binarySearchTree.insert(5);
    binarySearchTree.insert(15);

    expect(binarySearchTree.find(10)).toBeTruthy();
    expect(binarySearchTree.find(5)).toBeTruthy();
    expect(binarySearchTree.find(15)).toBeTruthy();
  });

  test('find - returns false for a value that is not in the binary search tree', () => {
    binarySearchTree.insert(10);

    expect(binarySearchTree.find(5)).toBe(false);
  });

  test('breadthFirstSearch - returns an array of values in breadth-first order', () => {
    binarySearchTree.insert(10);
    binarySearchTree.insert(5);
    binarySearchTree.insert(15);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);

    const result = binarySearchTree.breadthFirstSearch();

    expect(result).toEqual([10, 5, 15, 3, 7]);
  });

  test('depthFirstSearchPreOrder - returns an array of values in pre-order', () => {
    binarySearchTree.insert(10);
    binarySearchTree.insert(5);
    binarySearchTree.insert(15);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);

    const result = binarySearchTree.depthFirstSearchPreOrder();

    expect(result).toEqual([10, 5, 3, 7, 15]);
  });

  test('depthFirstSearchPostOrder - returns an array of values in post-order', () => {
    binarySearchTree.insert(10);
    binarySearchTree.insert(5);
    binarySearchTree.insert(15);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);

    const result = binarySearchTree.depthFirstSearchPostOrder();

    expect(result).toEqual([3, 7, 5, 15, 10]);
  });

  test('depthFirstSearchInOrder - returns an array of values in in-order', () => {
    binarySearchTree.insert(10);
    binarySearchTree.insert(5);
    binarySearchTree.insert(15);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);

    const result = binarySearchTree.depthFirstSearchInOrder();

    expect(result).toEqual([3, 5, 7, 10, 15]);
  });
});
