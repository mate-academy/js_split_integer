'use strict';

const splitInteger = require('./splitInteger');

test('should return the value itself when numberOfParts is 1', () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(1, 1)).toEqual([1]);
});

test('should split evenly when value is divisible by numberOfParts', () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(100, 5)).toEqual([20, 20, 20, 20, 20]);
});

test('should split with difference between min and max <= 1', () => {
  const result = splitInteger(17, 4);
  const max = Math.max(...result);
  const min = Math.min(...result);

  expect(max - min).toBeLessThanOrEqual(1);
});

test('should return sorted array in ascending order', () => {
  const result = splitInteger(32, 6);
  const sorted = [...result].sort((a, b) => a - b);

  expect(result).toEqual(sorted);
});

test('should handle case when value < numberOfParts (some parts are 0)', () => {
  const result = splitInteger(3, 5);

  expect(result.length).toBe(5);
  expect(result.reduce((sum, val) => sum + val, 0)).toBe(3);

  const max = Math.max(...result);
  const min = Math.min(...result);

  expect(max - min).toBeLessThanOrEqual(1);
});
