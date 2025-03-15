'use strict';

const splitInteger = require('./splitInteger');

test('should split a number into equal parts when value is divisible by numberOfParts', () => {
  const parts = splitInteger(8, 4);
  expect(parts).toEqual([2, 2, 2, 2]);
});

test('should return a single part equal to the value when splitting into 1 part', () => {
  const parts = splitInteger(8, 1);
  expect(parts).toEqual([8]);
});

test('should split a number into nearly equal parts in ascending order', () => {
  const parts = splitInteger(17, 4);
  expect(parts).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value is less than numberOfParts', () => {
  const parts = splitInteger(3, 4);
  expect(parts).toEqual([0, 1, 1, 1]);
});
