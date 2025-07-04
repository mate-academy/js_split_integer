'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(6, 2);

  expect(result).toEqual([3, 3]);

  expect(result.length).toBe(2);
  expect(result.every(n => n === 3)).toBe(true);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);

  expect(result).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);

  expect(result).toEqual([4, 4, 4, 5]);

  const isSorted = result.every((v, i, arr) => i === 0 || arr[i - 1] <= v);

  expect(isSorted).toBe(true);

  const diff = Math.max(...result) - Math.min(...result);

  expect(diff <= 1).toBe(true);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(2, 5);

  expect(result.length).toBe(5);
  expect(result.reduce((a, b) => a + b)).toBe(2);
  expect(Math.max(...result)).toBeLessThanOrEqual(1);
  expect(result.filter(n => n === 0).length).toBe(3);
});
