'use strict';

const splitInteger = require('./splitInteger');

test('should split a number into equal parts ', () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);

  expect(result).toHaveLength(4);
  expect(result.reduce((acc, val) => acc + val)).toBe(17);
  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
  expect(result).toEqual(result.sort((a, b) => a - b));
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(32, 6);

  expect(result).toHaveLength(6);
  expect(result.reduce((acc, val) => acc + val)).toBe(32);
  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
  expect(result).toEqual(result.sort((a, b) => a - b));
});
