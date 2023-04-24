'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(20, 4)).toEqual([5, 5, 5, 5]);
  expect(splitInteger(140, 7)).toEqual([20, 20, 20, 20, 20, 20, 20]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(35, 1)).toEqual([35]);
  expect(splitInteger(3, 1)).toEqual([3]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  expect(splitInteger(21, 4)).toEqual([5, 5, 5, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(5, 10)).toEqual([0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
  expect(splitInteger(2, 5)).toEqual([0, 0, 0, 1, 1]);
});
