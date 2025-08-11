'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(9, 3)).toEqual([3, 3, 3]);
  expect(splitInteger(10, 2)).toEqual([5, 5]);
  expect(splitInteger(16, 4)).toEqual([4, 4, 4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(3, 1)).toEqual([3]);
  expect(splitInteger(5, 1)).toEqual([5]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  expect(splitInteger(13, 5)).toEqual([2, 2, 3, 3, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 3)).toEqual([0, 1, 1]);
  expect(splitInteger(4, 6)).toEqual([0, 0, 1, 1, 1, 1]);
});
