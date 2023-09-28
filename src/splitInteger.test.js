'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 2))
    .toEqual([4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(3, 1))
    .toEqual([3]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(11, 4))
    .toEqual([2, 3, 3, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(12, 13))
    .toEqual([0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
});
