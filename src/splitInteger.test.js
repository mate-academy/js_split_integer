'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2))
    .toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(6, 1))
    .toEqual([6]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(5, 2))
    .toEqual([2, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 3))
    .toEqual([0, 0, 1]);
});

test('should be <= 1 difference between max and min number', () => {
  const result = splitInteger(15, 7);
  const max = Math.max(...result);
  const min = Math.min(...result);

  const difference = max - min;

  expect(difference).toBeLessThanOrEqual(1);
});
