'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(12, 4)).toEqual([3, 3, 3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);

  expect(result).toEqual([4, 4, 4, 5]);

  for (let i = 1; i < result.length; i++) {
    expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
  }
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 5);

  expect(result.length).toBe(5);
  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
  expect(result.reduce((a, b) => a + b, 0)).toBe(3);

  for (let i = 1; i < result.length; i++) {
    expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
  }
});
