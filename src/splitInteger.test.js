'use strict';

const splitInteger = require('./splitInteger');

test('should split a number into equal parts if divisible', () => {
  const parts = splitInteger(6, 2);
  expect(parts).toEqual([3, 3]);
  expect(parts).toHaveLength(2);
  expect(parts.reduce((a, b) => a + b, 0)).toBe(6);
  expect(parts.every(Number.isInteger)).toBe(true);
  expect(Math.max(...parts) - Math.min(...parts)).toBeLessThanOrEqual(1);
  expect(parts.every((v, i) => i === 0 || parts[i] >= parts[i - 1])).toBe(true);
});

test('should split a number into almost equal parts', () => {
  const parts = splitInteger(32, 6);
  expect(parts).toEqual([5, 5, 5, 5, 6, 6]);
  expect(parts).toHaveLength(6);
  expect(parts.reduce((a, b) => a + b, 0)).toBe(32);
  expect(parts.every(Number.isInteger)).toBe(true);
  expect(Math.max(...parts) - Math.min(...parts)).toBeLessThanOrEqual(1);
  expect(parts.every((v, i) => i === 0 || parts[i] >= parts[i - 1])).toBe(true);
});

test('should handle value < numberOfParts', () => {
  const parts = splitInteger(2, 5);
  expect(parts).toEqual([0, 0, 0, 1, 1]);
  expect(parts).toHaveLength(5);
  expect(parts.reduce((a, b) => a + b, 0)).toBe(2);
  expect(parts.every(Number.isInteger)).toBe(true);
  expect(Math.max(...parts) - Math.min(...parts)).toBeLessThanOrEqual(1);
  expect(parts.every((v, i) => i === 0 || parts[i] >= parts[i - 1])).toBe(true);
});

test('should return [8] when splitting 8 into 1 part', () => {
  const parts = splitInteger(8, 1);
  expect(parts).toEqual([8]);
  expect(parts).toHaveLength(1);
  expect(parts.reduce((a, b) => a + b, 0)).toBe(8);
  expect(parts.every(Number.isInteger)).toBe(true);
  expect(Math.max(...parts) - Math.min(...parts)).toBeLessThanOrEqual(1);
  expect(parts.every((v, i) => i === 0 || parts[i] >= parts[i - 1])).toBe(true);
});

test('should split 17 into 4 almost equal parts [4, 4, 4, 5]', () => {
  const parts = splitInteger(17, 4);
  expect(parts).toEqual([4, 4, 4, 5]);
  expect(parts).toHaveLength(4);
  expect(parts.reduce((a, b) => a + b, 0)).toBe(17);
  expect(parts.every(Number.isInteger)).toBe(true);
  expect(Math.max(...parts) - Math.min(...parts)).toBeLessThanOrEqual(1);
  expect(parts.every((v, i) => i === 0 || parts[i] >= parts[i - 1])).toBe(true);
});
