// https://visualgo.net/en/hashtable
/* Big O of Hash Tables
   - Insertion - O(1)
   - Deletion - O(1)
   - Access - O(1)
 */

/**
 * Represents a hash table data structure.
 * @template K - The type of keys in the hash table.
 * @template V - The type of values in the hash table.
 */
export class HashTable<K = string, V = unknown> {
  /**
   * Creates a new hash table with a specified size.
   * @param {number} size - The size of the hash table.
   * @param {Array<Array<[K, V]>>} keyMap - The underlying data structure storing key-value pairs.
   */
  constructor(
    size: number,
    public keyMap: [K, V][][] = new Array(size),
  ) {}

  /**
   * Generates a hash index for the given key using a hashing algorithm.
   * @private
   * @param {K} key - The key to be hashed.
   * @returns {number} - The calculated hash index.
   */
  private hash(key: K): number {
    let total = 0;
    const WEIRD_PRIME = 31;
    const ALPHABETICAL_START_POSITION = 96;

    for (let i = 0; i < Math.min(String(key).length, 100); i++) {
      const char = String(key)[i];
      const value = char.charCodeAt(0) - ALPHABETICAL_START_POSITION;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  /**
   * Adds a key-value pair to the hash table.
   * @param {K} key - The key for the pair.
   * @param {V} value - The value for the pair.
   * @returns {number} - The index where the pair is stored in the hash table.
   */
  set(key: K, value: V): number {
    const index = this.hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);

    return index;
  }

  /**
   * Retrieves the value associated with a given key from the hash table.
   * @param {K} key - The key to look up.
   * @returns {V | undefined} - The value associated with the key, or undefined if the key is not found.
   */
  get(key: K): V | undefined {
    const index = this.hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  /**
   * Retrieves all keys stored in the hash table.
   * @returns {K[]} - An array of all keys in the hash table.
   */
  keys(): K[] {
    const keys: K[] = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keys.includes(this.keyMap[i][j][0])) {
            keys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return keys;
  }

  /**
   * Retrieves all unique values stored in the hash table.
   * @returns {V[]} - An array of all unique values in the hash table.
   */
  values(): V[] {
    const values: V[] = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!values.includes(this.keyMap[i][j][1])) {
            values.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return values;
  }
}
