'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(3, 1)).toEqual([3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(3, 3)).toEqual([1, 1, 1]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(7, 3)).toEqual([2, 2, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(10, 1)).toEqual([10]);
});
