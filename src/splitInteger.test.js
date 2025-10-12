'use strict';

const splitInteger = require('./splitInteger');

test('should split divisible numbers correctly', () => {
  const parts = splitInteger(6, 2);
  expect(parts).toEqual([3, 3]);
  expect(parts).toHaveLength(2);
  expect(parts.reduce((a, b) => a + b, 0)).toBe(6);
  expect(parts.every(Number.isInteger)).toBe(true);
  expect(Math.max(...parts) - Math.min(...parts)).toBeLessThanOrEqual(1);
});

test('should split non-divisible numbers correctly and keep properties', () => {
  const parts = splitInteger(32, 6);
  expect(parts).toEqual([5, 5, 5, 5, 6, 6]);
  expect(parts).toHaveLength(6);
  expect(parts.reduce((a, b) => a + b, 0)).toBe(32);
  expect(parts.every(Number.isInteger)).toBe(true);
  expect(Math.max(...parts) - Math.min(...parts)).toBeLessThanOrEqual(1);
});

test('should handle case when value < numberOfParts', () => {
  const parts = splitInteger(2, 5);
  expect(parts).toEqual([0, 0, 0, 1, 1]);
  expect(parts).toHaveLength(5);
  expect(parts.reduce((a, b) => a + b, 0)).toBe(2);
  expect(parts.every(Number.isInteger)).toBe(true);
  expect(Math.max(...parts) - Math.min(...parts)).toBeLessThanOrEqual(1);
});

