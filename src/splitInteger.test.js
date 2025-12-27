'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(8, 2)).toEqual([4, 4]);
  expect(splitInteger(8, 4)).toEqual([2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(16, 1)).toEqual([16]);
  expect(splitInteger(24, 1)).toEqual([24]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(8, 5)).toEqual([1, 1, 2, 2, 2]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 5)).toEqual([0, 0, 0, 1, 1]);
  expect(splitInteger(1, 2)).toEqual([0, 1]);
  expect(splitInteger(3, 4)).toEqual([0, 1, 1, 1]);
});

