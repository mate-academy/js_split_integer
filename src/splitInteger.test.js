'use strict';

const splitInteger = require('./splitInteger');

function assertProperties(value, numberOfParts) {
  const result = splitInteger(value, numberOfParts);

  expect(result.every(Number.isInteger)).toBe(true);

  expect(result).toHaveLength(numberOfParts);

  for (let i = 0; i < result.length - 1; i++) {
    expect(result[i]).toBeLessThanOrEqual(result[i + 1]);
  }
  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
  expect(result.reduce((a, b) => a + b, 0)).toBe(value);

  return result;
}

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = assertProperties(6, 2);

  expect(result).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = assertProperties(8, 1);

  expect(result).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = assertProperties(17, 4);

  expect(result).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = assertProperties(2, 5);

  expect(result).toEqual([0, 0, 0, 1, 1]);
});
