import { HashTable } from 'data-structures-ts';

describe('HashTable', () => {
  let hashTable: HashTable<string, number>;

  beforeEach(() => {
    hashTable = new HashTable<string, number>(5);
  });

  test('set - adds a key-value pair to the hash table', () => {
    hashTable.set('one', 1);
    hashTable.set('two', 2);

    expect(hashTable.get('one')).toBe(1);
    expect(hashTable.get('two')).toBe(2);
  });

  test('get - retrieves the value associated with a given key', () => {
    hashTable.set('one', 1);
    hashTable.set('two', 2);

    expect(hashTable.get('one')).toBe(1);
    expect(hashTable.get('two')).toBe(2);
  });

  test('get - returns undefined for a key that is not in the hash table', () => {
    expect(hashTable.get('nonexistent')).toBeUndefined();
  });

  test('keys - retrieves all keys stored in the hash table', () => {
    hashTable.set('one', 1);
    hashTable.set('two', 2);

    const keys = hashTable.keys();

    expect(keys).toContain('one');
    expect(keys).toContain('two');
  });

  test('values - retrieves all unique values stored in the hash table', () => {
    hashTable.set('one', 1);
    hashTable.set('two', 2);
    hashTable.set('duplicate', 1);

    const values = hashTable.values();

    expect(values).toContain(1);
    expect(values).toContain(2);
    expect(values.length).toBe(2);
  });
});
