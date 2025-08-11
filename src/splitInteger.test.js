'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(8, 2);

  expect(result).toEqual([4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(6, 1);

  expect(result).toEqual([6]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);

  expect(result).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(5, 6);

  expect(result)
    .toEqual([0, 1, 1, 1, 1, 1]);
});

test('should split integer with minimal difference between max and min', () => {
  const result = splitInteger(32, 6);
  const max = Math.max(...result);
  const min = Math.min(...result);

  expect(max - min).toBeLessThanOrEqual(1);
});

test('should sort the array in ascending order', () => {
  const result = splitInteger(32, 6);

  for (let i = 1; i < result.length; i++) {
    expect(result[i - 1]).toBeLessThanOrEqual(result[i]);
  }
});
