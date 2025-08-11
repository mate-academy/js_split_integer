'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 2)).toEqual([5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(5, 1)).toEqual([5]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(10, 3);

  const sortedResult = [...result].sort((a, b) => a - b);

  expect(result).toEqual(sortedResult);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 5)).toEqual([0, 0, 0, 1, 1]);
});
