// src/merge.ts
export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    let i = 0;
    let j = 0;
    let k = 0;
    const result: number[] = [];
  
    while (i < collection1.length && j < collection2.length && k < collection3.length) {
      if (collection1[i] <= collection3[k]) {
        result.push(collection1[i]);
        i++;
      } else {
        result.push(collection3[k]);
        k++;
      }
    }
  
    while (i < collection1.length) {
      result.push(collection1[i]);
      i++;
    }
  
    while (k < collection3.length) {
      result.push(collection3[k]);
      k++;
    }
  
    return result;
  }
  