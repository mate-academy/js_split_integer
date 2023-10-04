'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 5))
    .toEqual([2, 2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(10, 1))
    .toEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 4))
    .toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 5))
    .toEqual([0, 0, 1, 1, 1]);
});

test('should return an array with 1 if value = numberOfParts', () => {
  expect(splitInteger(3, 3))
    .toEqual([1, 1, 1]);
});

test('should return an empty array if numberOfParts = 0', () => {
  expect(splitInteger(12, 0))
    .toEqual([]);
});
