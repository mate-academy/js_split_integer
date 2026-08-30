'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(3, 1)).toEqual([3]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(3, 2)).toEqual([1, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 3)).toEqual([0, 0, 1]);
});

test(`should split integer when value
   is not divisible by numberOfParts`, () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});

test('should distribute values evenly with difference <= 1', () => {
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});
