// test/merge.test.ts
const { merge } = require('../src/merge');

describe('merge', () => {
  it('should merge sorted arrays', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const collection3 = [6, 4, 2];
    const result = merge(collection1, collection2, collection3);

    console.log('Actual Result:', result);
    console.log('Expected Result:', [6, 6, 5, 4, 4, 3, 2, 2, 1]);

    expect(result).toEqual([6, 6, 5, 4, 4, 3, 2, 2, 1]);
  });
});
