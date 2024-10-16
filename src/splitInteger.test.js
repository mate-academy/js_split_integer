'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(17, 4);

  expect(result).toEqual([4, 4, 4, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);

  expect(result).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(32, 6);
  const sortedResult = [...result].sort((a, b) => a - b);

  expect(result).toEqual(sortedResult);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 5);

  expect(result).toEqual([0, 0, 1, 1, 1]);
});

test(`should have differences between max integer
  and min integer in array less or equal 1`, () => {
  const result = splitInteger(17, 4);
  const maxMinDiff = Math.max(...result) - Math.min(...result);

  expect(maxMinDiff).toBeLessThanOrEqual(1);
});
