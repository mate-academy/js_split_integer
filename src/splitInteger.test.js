'use strict';

const splitInteger = require('./splitInteger');

test('should split a number into equal parts if divisible', () => {
  expect(splitInteger(10, 2)).toEqual([5, 5]);
  expect(splitInteger(12, 3)).toEqual([4, 4, 4]);
});

test('should return a part equal to a value for 1 part', () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(11, 3)).toEqual([3, 4, 4]);
  expect(splitInteger(14, 4)).toEqual([3, 3, 4, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 4)).toEqual([0, 0, 1, 1]);
  expect(splitInteger(1, 3)).toEqual([0, 0, 1]);
});
