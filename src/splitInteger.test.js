// src/splitInteger.test.js

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
  const value = 18;
  const numberOfParts = 3;
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([6, 6, 6]);
});

test('should add zeros if value < parts', () => {
  const value = 5;
  const numberOfParts = 8;
  const result = splitInteger(value, numberOfParts);

  expect(result.length).toBe(numberOfParts);

  const sum = result.reduce((acc, curr) => acc + curr, 0);

  expect(sum).toBe(value);
});
