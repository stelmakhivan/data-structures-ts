// https://visualgo.net/en/hashtable
/* Big O of Hash Tables
   - Insertion - O(1)
   - Deletion - O(1)
   - Access - O(1)
 */

export class HashTable<K = string, V = unknown> {
  constructor(
    size: number,
    public keyMap: [K, V][][] = new Array(size),
  ) {}

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

  set(key: K, value: V): number {
    const index = this.hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);

    return index;
  }

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
