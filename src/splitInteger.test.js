'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(15, 5)).toEqual([3, 3, 3, 3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(15, 1)).toEqual([15]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(13, 3)).toEqual([4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 5)).toEqual([0, 0, 0, 1, 1]);
});

test('should have a difference between max and min number <= 1', () => {
  const parts = splitInteger(10, 3);

  expect(Math.max(...parts) - Math.min(...parts)).toBeLessThanOrEqual(1);
});
