'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(15, 3)).toEqual([5, 5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(11, 1)).toEqual([11]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(39, 7);
  const sorted = [...result].sort((a, b) => a - b);

  expect(result).toEqual(sorted);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(4, 6)).toEqual([0, 0, 1, 1, 1, 1]);
});
