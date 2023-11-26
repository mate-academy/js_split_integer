'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
  expect(splitInteger(15, 3)).toEqual([5, 5, 5]);
  expect(splitInteger(20, 5)).toEqual([4, 4, 4, 4, 4]);
  expect(splitInteger(27, 3)).toEqual([9, 9, 9]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(20, 1)).toEqual([20]);
  expect(splitInteger(15, 1)).toEqual([15]);
  expect(splitInteger(39, 1)).toEqual([39]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(25, 6)).toEqual([4, 4, 4, 4, 4, 5]);
  expect(splitInteger(12, 5)).toEqual([2, 2, 2, 3, 3]);
  expect(splitInteger(7, 3)).toEqual([2, 2, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(5, 8)).toEqual([0, 0, 0, 1, 1, 1, 1, 1]);
  expect(splitInteger(10, 12)).toEqual([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2]);
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
  expect(splitInteger(7, 9)).toEqual([0, 0, 0, 0, 1, 1, 1, 2, 2]);
});
