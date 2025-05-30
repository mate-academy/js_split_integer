'use strict';

const splitInteger = require('./splitInteger');

test('should split a number into equal parts if divisible', () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test('should return the full value when splitting into 1 part', () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});

test('should handle case when value < numberOfParts', () => {
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
});
