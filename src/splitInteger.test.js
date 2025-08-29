'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(6, 2);

  expect(result).toEqual([3, 3]);
  expect(result).toHaveLength(2);
  expect(result.every(Number.isInteger)).toBe(true);
  expect(result.reduce((a, b) => a + b, 0)).toBe(6);
  expect([...result].sort((a, b) => a - b)).toEqual(result);
  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);

  expect(result).toEqual([8]);
  expect(result).toHaveLength(1);
  expect(result.every(Number.isInteger)).toBe(true);
  expect(result.reduce((a, b) => a + b, 0)).toBe(8);
  expect([...result].sort((a, b) => a - b)).toEqual(result);
  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(20, 6);

  expect(result).toEqual([3, 3, 3, 3, 4, 4]);
  expect(result).toHaveLength(6);
  expect(result.every(Number.isInteger)).toBe(true);
  expect(result.reduce((a, b) => a + b, 0)).toBe(20);
  expect([...result].sort((a, b) => a - b)).toEqual(result);
  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
});

test('should handle splitting 17 into 4 parts', () => {
  const result = splitInteger(17, 4);

  expect(result).toEqual([4, 4, 4, 5]);
  expect(result).toHaveLength(4);
  expect(result.every(Number.isInteger)).toBe(true);
  expect(result.reduce((a, b) => a + b, 0)).toBe(17);
  expect([...result].sort((a, b) => a - b)).toEqual(result);
  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
});
