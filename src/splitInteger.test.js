'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
});

test('should return parts equal to 1 when splitting 2 into 2 parts', () => {
  expect(splitInteger(2, 2)).toEqual([1, 1]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 2)).toEqual([0, 1]);
});
