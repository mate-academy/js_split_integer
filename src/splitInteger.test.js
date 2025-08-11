/* eslint-disable max-len */

'use strict';

const splitInteger = require('./splitInteger');

// eslint-disable-next-line max-len
test('should split a number into equal parts if value is divisible by numberOfParts', () => {
  expect(splitInteger(8, 2)).toEqual([4, 4]);
  expect(splitInteger(9, 3)).toEqual([3, 3, 3]);
  expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
});

test('should return a part equals to a value when splitting into 1 part', () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(15, 1)).toEqual([15]);
  expect(splitInteger(100, 1)).toEqual([100]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  expect(splitInteger(20, 3)).toEqual([6, 7, 7]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 3)).toEqual([0, 1, 1]);
  expect(splitInteger(1, 5)).toEqual([0, 0, 0, 0, 1]);
  expect(splitInteger(0, 4)).toEqual([0, 0, 0, 0]);
});
