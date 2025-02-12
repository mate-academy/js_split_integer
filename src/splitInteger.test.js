'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 2)).toEqual([5, 5]);
  expect(splitInteger(15, 3)).toEqual([5, 5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(7, 1)).toEqual([7]);
  expect(splitInteger(100, 1)).toEqual([100]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  expect(splitInteger(7, 3)).toEqual([2, 2, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 5)).toEqual([0, 0, 0, 1, 1]);
  expect(splitInteger(2, 4)).toEqual([0, 0, 1, 1]);
});
