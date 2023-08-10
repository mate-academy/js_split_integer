'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2))
    .toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(9, 1))
    .toEqual([9]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(21, 4))
    .toEqual([5, 5, 5, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 4))
    .toEqual([0, 1, 1, 1]);
});
