'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 2)).toEqual([5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(7, 1)).toEqual([7]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  expect(splitInteger(10, 4)).toEqual([2, 2, 3, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
});

test('should handle cases where the difference between max and min is <= 1', () => {
  expect(splitInteger(5, 2)).toEqual([2, 3]);
  expect(splitInteger(11, 3)).toEqual([3, 4, 4]);
  expect(splitInteger(1, 10)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
});

test('should handle edge cases with small values and parts', () => {
  expect(splitInteger(0, 5)).toEqual([0, 0, 0, 0, 0]);
  expect(splitInteger(1, 1)).toEqual([1]);
});
