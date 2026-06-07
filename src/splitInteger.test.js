'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(9, 3)).toEqual([3, 3, 3]);
  expect(splitInteger(4, 2)).toEqual([2, 2]);
  expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(9, 1)).toEqual([9]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(9, 5)).toEqual([1, 2, 2, 2, 2]);
  expect(splitInteger(4, 3)).toEqual([1, 1, 2]);
  expect(splitInteger(10, 4)).toEqual([2, 2, 3, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
  expect(splitInteger(2, 4)).toEqual([0, 0, 1, 1]);
});
