'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(12, 3)).toEqual([4, 4, 4]);
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(25, 1)).toEqual([25]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);
  const sorted = [...result].sort((a, b) => a - b);

  expect(result).toEqual(sorted);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
  expect(splitInteger(1, 3)).toEqual([0, 0, 1]);
});
