'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  expect(splitInteger(29, 3)).toEqual([9, 10, 10]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
});

test('should split the smallest positive value', () => {
  expect(splitInteger(1, 1)).toEqual([1]);
  expect(splitInteger(1, 4)).toEqual([0, 0, 0, 1]);
});

test('should return ones if value equals numberOfParts', () => {
  expect(splitInteger(4, 4)).toEqual([1, 1, 1, 1]);
});

test('should return exactly numberOfParts elements', () => {
  expect(splitInteger(23, 7)).toHaveLength(7);
});

test('should preserve the total value', () => {
  const parts = splitInteger(23, 7);

  expect(parts.reduce((sum, part) => sum + part, 0)).toBe(23);
});

test('should return only integer parts', () => {
  const parts = splitInteger(23, 7);

  parts.forEach((part) => {
    expect(Number.isInteger(part)).toBe(true);
  });
});

test('should keep the difference between max and min parts at most 1', () => {
  const parts = splitInteger(23, 7);

  expect(Math.max(...parts) - Math.min(...parts)).toBeLessThanOrEqual(1);
});
