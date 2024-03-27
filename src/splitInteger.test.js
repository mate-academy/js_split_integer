'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(3, 1)).toEqual([3]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(18, 4)).toEqual([4, 4, 5, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 4)).toEqual([0, 0, 1, 1]);
});
