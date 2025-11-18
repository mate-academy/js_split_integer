'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(8, 2);

  const min = Math.min(...result);
  const max = Math.max(...result);

  expect(max - min).toBeLessThanOrEqual(1);
  expect(result).toHaveLength(2);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(6, 1);

  expect(result[0]).toBe(6);
  expect(result).toHaveLength(1);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(5, 3);
  const sorted = [...result].sort((a, b) => a - b);

  const min = Math.min(...result);
  const max = Math.max(...result);

  expect(max - min).toBeLessThanOrEqual(1);
  expect(result).toStrictEqual(sorted);
  expect(result).toHaveLength(3);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(6, 8);

  function countZeros(arr) {
    let count = 0;

    for (const a of arr) {
      if (a === 0) {
        count++;
      }
    }

    return count;
  }

  expect(result).toHaveLength(8);
  expect(countZeros(result)).toBe(2);
  expect(result.reduce((a, b) => a + b, 0)).toBe(6);
});
