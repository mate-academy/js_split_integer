'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);
  const sorted = result.slice().sort((a, b) => a - b);

  expect(result).toEqual(sorted);
});

test('should add zeros if value < numberOfParts', () => {
  // Example: split 3 into 5 parts → [0, 0, 1, 1, 1]
  const result = splitInteger(3, 5);

  expect(result).toHaveLength(5);
  expect(result.reduce((a, b) => a + b, 0)).toBe(3);

  const sorted = result.slice().sort((a, b) => a - b);

  expect(result).toEqual(sorted);

  expect(result[result.length - 1] - result[0]).toBeLessThanOrEqual(1);
});
