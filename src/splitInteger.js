'use strict';

function splitInteger(value, numberOfParts) {
  const basePart = Math.floor(value / numberOfParts);
  const remainder = value % numberOfParts;
  const result = Array(numberOfParts).fill(basePart);

  for (let i = 0; i < remainder; i++) {
    result[i]++;
  }

  return result.sort((a, b) => a - b);
}

describe('splitInteger', () => {
  test('should return an array with one element when numberOfParts is 1',
    () => {
      expect(splitInteger(8, 1)).toEqual([8]);
    });

  test('should return equal parts when value can be evenly divided', () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
  });

  test('should return parts with a'
    + 'difference of 1 when value cannot be evenly divided',
  () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  test('should handle larger values and multiple parts', () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  test('should return sorted array in ascending order', () => {
    const result = splitInteger(29, 5);

    expect(result).toEqual([5, 5, 6, 6, 7]);
    expect(result).toBeSorted();
  });

  test('should handle case where value is smaller than numberOfParts', () => {
    expect(splitInteger(3, 5)).toEqual([0, 0, 0, 1, 2]);
  });

  test('should handle case where value equals numberOfParts', () => {
    expect(splitInteger(4, 4)).toEqual([1, 1, 1, 1]);
  });
});
