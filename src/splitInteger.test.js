'use strict';

describe('splitInteger', () => {
  test('should return [8] when value is 8 and numberOfParts is 1', () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  test('should return [3, 3] when value is 6 and numberOfParts is 2', () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
  });

  test('should return [4, 4, 4, 5] when value is 17 and numberOfParts is 4', () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  test('should return [5, 5, 5, 5, 6, 6] when value is 32 and numberOfParts is 6', () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  test('should return [2, 2, 2] when value is 6 and numberOfParts is 3', () => {
    expect(splitInteger(6, 3)).toEqual([2, 2, 2]);
  });

  test('should return [1, 1, 1, 1, 2] when value is 6 and numberOfParts is 5', () => {
    expect(splitInteger(6, 5)).toEqual([1, 1, 1, 1, 2]);
  });
});
