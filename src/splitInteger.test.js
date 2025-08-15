'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(3, 8);

  expect(result).toBeInstanceOf(Array);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(6, 1);

  expect(Array.isArray(result)).toBe(true);

  expect(result).toHaveLength(1);
  expect(result[0]).toBe(6);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);

  expect(result).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(2, 5);

  expect(Array.isArray(result)).toBe(true);

  expect(result).toHaveLength(5);

  result.forEach((part) => {
    expect(part).toBeLessThanOrEqual(2);
  });
});
