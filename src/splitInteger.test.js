/* eslint-disable max-len */
'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(100, 4);

  expect(result).toEqual([25, 25, 25, 25]);
  expect(result[0]).toEqual(result[result.length - 1]);

  const resultMaxMin = Math.max(...result) - Math.min(...result);

  expect(resultMaxMin <= 1).toBeTruthy();
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(100, 1);

  expect(result).toEqual([100]);
});

test(`should have length === 1
  when splitting into 1 part`, () => {
  const result = splitInteger(100, 1);

  expect(result.length).toEqual(1);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(99, 4);

  expect(result).toEqual([24, 25, 25, 25]);

  const resultMaxMin = Math.max(...result) - Math.min(...result);

  expect(resultMaxMin <= 1).toBeTruthy();
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 100);
  const equalResult = [];
  const equalValue = 3;
  const equalNumberOfParts = 100;

  for (let i = 0; i < equalNumberOfParts - equalValue; i++) {
    equalResult.push(0);
  }

  for (let i = 0; i < equalValue; i++) {
    equalResult.push(1);
  }

  expect(result).toEqual(equalResult);
});

test('Should be an array', () => {
  const result = splitInteger();

  expect(result).toBeInstanceOf(Array);
  expect(Array.isArray(result)).toBe(true);
  // expect(typeof result).toBe('string');
});

test('Should return 0 array for 0 value', () => {
  const result = splitInteger(0, 5);

  expect(result).toEqual([0, 0, 0, 0, 0]);
});

test('Should return empty array for 0 numberOfParts', () => {
  const result = splitInteger(5, 0);

  expect(result).toEqual([]);
});

test('Should have result.length === numberOfParts;', () => {
  const result = splitInteger(99, 4);

  expect(result.length).toEqual(4);
});

test(`should return [8] if value === 8 and numberOfParts === 1`, () => {
  const result = splitInteger(8, 1);

  expect(result).toEqual([8]);
});

test(`should return [3, 3] if value === 6 and numberOfParts === 2`, () => {
  const result = splitInteger(6, 2);

  expect(result).toEqual([3, 3]);
});

test(`should return [4, 4, 4, 5] if value === 17 and numberOfParts === 4`, () => {
  const result = splitInteger(17, 4);

  expect(result).toEqual([4, 4, 4, 5]);
});

test(`should return [5, 5, 5, 5, 6, 6] if value === 32 and numberOfParts === 6`, () => {
  const result = splitInteger(32, 6);

  expect(result).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(2, 5);

  expect(Array.isArray(result)).toBe(true);

  expect(result).toHaveLength(5);

  result.forEach((part) => {
    expect(part).toBeLessThanOrEqual(1);
  });
});
