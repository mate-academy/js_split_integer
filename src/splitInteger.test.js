'use strict';

const splitInteger = require('./splitInteger');

const assertSplitProperties = (parts, value, numberOfParts) => {

  expect(parts).toHaveLength(numberOfParts);

  expect(parts.every(Number.isInteger)).toBe(true);

  expect(parts).toEqual([...parts].sort((a, b) => a - b));

  const diff = Math.max(...parts) - Math.min(...parts);

  expect(diff).toBeLessThanOrEqual(1);

  const sum = parts.reduce((s, x) => s + x, 0);

  expect(sum).toBe(value);
};

test(`should split a number into equal parts 
  if value is divisible by numberOfParts`, () => {
  const value = 10;
  const numberOfParts = 5;
  const parts = splitInteger(value, numberOfParts);

  expect(parts).toEqual([2, 2, 2, 2, 2]);
  assertSplitProperties(parts, value, numberOfParts);
});

test('should return a part equal to value when splitting into 1 part', () => {
  const value = 7;
  const numberOfParts = 1;
  const parts = splitInteger(value, numberOfParts);

  expect(parts).toEqual([7]);
  assertSplitProperties(parts, value, numberOfParts);
});

test('should sort parts ascending if they are not equal', () => {
  const value = 10;
  const numberOfParts = 3;
  const parts = splitInteger(value, numberOfParts);

  expect(parts).toEqual([3, 3, 4]);
  assertSplitProperties(parts, value, numberOfParts);
});

test('should add zeros if value < numberOfParts', () => {
  const value = 2;
  const numberOfParts = 3;
  const parts = splitInteger(value, numberOfParts);

  expect(parts).toEqual([0, 1, 1]);
  assertSplitProperties(parts, value, numberOfParts);
});

test('example: splitInteger(8, 1)', () => {
  const value = 8;
  const numberOfParts = 1;
  const parts = splitInteger(value, numberOfParts);

  expect(parts).toEqual([8]);
  assertSplitProperties(parts, value, numberOfParts);
});

test('example: splitInteger(6, 2)', () => {
  const value = 6;
  const numberOfParts = 2;
  const parts = splitInteger(value, numberOfParts);

  expect(parts).toEqual([3, 3]);
  assertSplitProperties(parts, value, numberOfParts);
});

test('example: splitInteger(17, 4)', () => {
  const value = 17;
  const numberOfParts = 4;
  const parts = splitInteger(value, numberOfParts);

  expect(parts).toEqual([4, 4, 4, 5]);
  assertSplitProperties(parts, value, numberOfParts);
});

test('example: splitInteger(32, 6)', () => {
  const value = 32;
  const numberOfParts = 6;
  const parts = splitInteger(value, numberOfParts);

  expect(parts).toEqual([5, 5, 5, 5, 6, 6]);
  assertSplitProperties(parts, value, numberOfParts);
});
