'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 2)).toEqual([4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(4, 1)).toBe(4);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);
  const sortedResult = result.sort((a, b) => a - b);

  expect(result).toEqual(sortedResult);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 2)).toEqual([0, 1]);
});
