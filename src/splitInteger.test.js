'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
  expect(splitInteger(12, 4)).toEqual([3, 3, 3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(7, 1)).toEqual([7]);
  expect(splitInteger(100, 1)).toEqual([100]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  expect(splitInteger(8, 3)).toEqual([2, 3, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 5)).toEqual([0, 0, 0, 1, 1]);
  expect(splitInteger(3, 6)).toEqual([0, 0, 0, 1, 1, 1]);
});
