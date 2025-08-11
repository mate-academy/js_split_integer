/* eslint-disable max-len */
'use strict';

const splitInteger = require('./splitInteger');

test('should split a number into equal parts if a value is divisible by a numberOfParts', () => {
  const result = splitInteger(10, 2);

  expect(result).toEqual([5, 5]);
});

test('should return a part equal to a value when splitting into 1 part', () => {
  const result = splitInteger(10, 1);

  expect(result).toEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(7, 3);

  expect(result).toEqual([2, 2, 3]); // Example of unequal splitting
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 5);

  expect(result).toEqual([0, 0, 0, 1, 2]); // Zeros added for smaller values
});
