'use strict';

const splitInteger = require('./splitInteger');

// eslint-disable-next-line max-len
test('should split a number into equal parts if value is divisible by numberOfParts', () => {
  const result = splitInteger(10, 5);

  expect(result).toEqual([2, 2, 2, 2, 2]);
});

// eslint-disable-next-line max-len
test('should return a part equal to the value when splitting into 1 part', () => {
  const result = splitInteger(7, 1);

  expect(result).toEqual([7]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(8, 3);

  expect(result).toEqual([2, 3, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 5);

  expect(result).toEqual([0, 0, 1, 1, 1]);
});
