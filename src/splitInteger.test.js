'use strict';
/* eslint-disable max-len */

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(6, 2);

  expect(result).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(6, 1);

  expect(result).toEqual([6]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(32, 6);

  expect(result).toEqual(result.slice().sort((a, b) => a - b));
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(5, 6);

  expect(result).toEqual([0, 1, 1, 1, 1, 1]);
});

test('should return array of length equal to numberOfParts', () => {
  const result = splitInteger(15, 5);

  expect(result).toHaveLength(5);
});

test('should ensure that difference between the max and min number in the array should be <= 1', () => {
  const result = splitInteger(23, 5);

  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
});
