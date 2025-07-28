'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(12, 4)).toEqual([3, 3, 3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(10, 3);
  const max = Math.max(...result);
  const min = Math.min(...result);

  expect(max - min).toBeLessThanOrEqual(1);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(10, 3);
  const sorted = [...result].sort((a, b) => a - b);

  expect(result).toEqual(sorted);
});

test('should add zeros if value < numberOfParts', () => {
  const value = 3;
  const numberOfParts = 5;
  const result = splitInteger(value, numberOfParts);

  expect(result.filter(n => n === 0).length).toBe(numberOfParts - value);
});
