'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 3)).toEqual([2, 2, 2]);
  expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);
  expect(result).toEqual([4, 4, 4, 5]);
  const sorted = [...result].sort((a, b) => a - b);
  expect(result).toEqual(sorted);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 5);
  expect(result).toHaveLength(5);
  expect(result.reduce((a,b) => a+b, 0)).toBe(3);
  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
  const sorted = [...result].sort((a, b) => a - b);
  expect(result).toEqual(sorted);
});
