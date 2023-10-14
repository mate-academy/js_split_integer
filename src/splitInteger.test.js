'use strict';

const splitInteger = require('./splitInteger'); // Import the splitInteger function

describe('splitInteger', () => {
  it('should return an array containing exactly numberOfParts integer elements', () => {
    expect(splitInteger(8, 1)).toEqual([8]);
    expect(splitInteger(6, 2)).toHaveLength(2);
    expect(splitInteger(17, 4)).toHaveLength(4);
    expect(splitInteger(32, 6)).toHaveLength(6);
  });

  it('should ensure the difference between the max and min number in the array is <= 1', () => {
    const result1 = splitInteger(8, 1);
    const result2 = splitInteger(6, 2);
    const result3 = splitInteger(17, 4);
    const result4 = splitInteger(32, 6);

    const maxDiff1 = Math.max(...result1) - Math.min(...result1);
    const maxDiff2 = Math.max(...result2) - Math.min(...result2);
    const maxDiff3 = Math.max(...result3) - Math.min(...result3);
    const maxDiff4 = Math.max(...result4) - Math.min(...result4);

    expect(maxDiff1).toBeLessThanOrEqual(1);
    expect(maxDiff2).toBeLessThanOrEqual(1);
    expect(maxDiff3).toBeLessThanOrEqual(1);
    expect(maxDiff4).toBeLessThanOrEqual(1);
  });

  it('should sort the array in ascending order', () => {
    expect(splitInteger(8, 1)).toEqual([8]);
    expect(splitInteger(6, 2)).toEqual([3, 3]);
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });
});
