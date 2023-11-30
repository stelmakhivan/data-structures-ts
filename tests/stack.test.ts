import { Stack } from 'data-structures-ts';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test('push - adds a new element to the top of the stack', () => {
    stack.push(1);
    stack.push(2);

    expect(stack.size).toBe(2);
    expect(stack.first?.value).toBe(2);
  });

  test('pop - removes and returns the element from the top of the stack', () => {
    stack.push(1);
    stack.push(2);

    const poppedValue = stack.pop();

    expect(poppedValue).toBe(2);
    expect(stack.size).toBe(1);
    expect(stack.first?.value).toBe(1);
  });

  test('pop - returns null if the stack is empty', () => {
    const poppedValue = stack.pop();

    expect(poppedValue).toBeNull();
    expect(stack.size).toBe(0);
  });

  test('push and pop maintain the correct stack order', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    const poppedValue1 = stack.pop();
    const poppedValue2 = stack.pop();

    expect(poppedValue1).toBe(3);
    expect(poppedValue2).toBe(2);
    expect(stack.size).toBe(1);
    expect(stack.first?.value).toBe(1);
  });
});
