'use strict';

const splitInteger = require('./splitInteger');

test('should split a number into equal parts if a value is divisible by a numberOfParts', () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should return a part equals to a value when splitting into 1 part', () => {
  expect(splitInteger(10, 1)).toEqual([10]);
  expect(splitInteger(20, 1)).toEqual([20]);
  expect(splitInteger(100, 1)).toEqual([100]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(15, 3)).toEqual([5, 5, 5]);
  expect(splitInteger(30, 5)).toEqual([6, 6, 6, 6, 6]);
  expect(splitInteger(25, 4)).toEqual([6, 6, 6, 7]);
});
