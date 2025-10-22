'use strict';

const splitInteger = require('./splitInteger');

function assertProperties(result, value, numberOfParts) {
  expect(result).toHaveLength(numberOfParts);
  expect(result.every(Number.isInteger)).toBe(true);
  expect(result.reduce((a, b) => a + b, 0)).toBe(value);
  expect(result).toEqual(result.slice().sort((a, b) => a - b));
  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
}

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const value = 6;
  const numberOfParts = 2;
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([3, 3]);
  assertProperties(result, value, numberOfParts);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 8;
  const numberOfParts = 1;
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([8]);
  assertProperties(result, value, numberOfParts);
});

test('should sort parts ascending if they are not equal', () => {
  const value = 17;
  const numberOfParts = 4;
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([4, 4, 4, 5]);
  assertProperties(result, value, numberOfParts);
});

test('should add zeros if value < numberOfParts', () => {
  const value = 2;
  const numberOfParts = 4;
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([0, 0, 1, 1]);
  assertProperties(result, value, numberOfParts);
});

test('should split 32 into 6 parts as in the example', () => {
  const value = 32;
  const numberOfParts = 6;
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([5, 5, 5, 5, 6, 6]);
  assertProperties(result, value, numberOfParts);
});
