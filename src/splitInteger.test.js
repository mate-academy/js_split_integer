'use strict';

const { splitInteger } = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(6, 2);

  expect(result).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);

  expect(result).toHaveLength(1);
  expect(result[0]).toBe(8);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);

  expect(result).toHaveLength(4);
  expect(result.reduce((s, x) => s + x, 0)).toBe(17);
  expect(result).toEqual([...result].sort((a, b) => a - b));
  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
  // expect(result).toEqual([4, 4, 4, 5]);
});

test('splits 32 into 6 parts exactly as in the example', () => {
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 5);

  expect(result).toHaveLength(5);
  expect(result.reduce((s, x) => s + x, 0)).toBe(3);
  expect(result.filter(x => x === 0).length).toBeGreaterThan(0);
  expect(result).toEqual([...result].sort((a, b) => a - b));
  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
});
