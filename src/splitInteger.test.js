'use strict';

const splitInteger = require('./splitInteger');

test('should split into equal parts if divisible', () => {
  const value = 12;
  const numberOfParts = 4;
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([3, 3, 3, 3]);
});

test('should return value when parts = 1', () => {
  const value = 15;
  const numberOfParts = 1;
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([15]);
});

test('should sort parts in ascending order', () => {
  const value = 5;
  const numberOfParts = 3;
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([1, 2, 2]);
});

test('should add zeros if value < numberOfParts', () => {
  const value = 5;
  const numberOfParts = 8;
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([0, 0, 0, 1, 1, 1, 1, 1]);
});
