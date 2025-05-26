'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by numberOfParts`, () => {
  expect(splitInteger(6, 3)).toEqual([2, 2, 2]);
  expect(splitInteger(12, 4)).toEqual([3, 3, 3, 3]);
});

test(`should return a part equal to value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(123, 1)).toEqual([123]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);

  expect(result).toEqual([4, 4, 4, 5]);
  expect(result).toEqual([...result].sort((a, b) => a - b));
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
  expect(splitInteger(0, 3)).toEqual([0, 0, 0]);
  expect(splitInteger(1, 4)).toEqual([0, 0, 0, 1]);
});

test('should ensure the sum of parts equals the original value', () => {
  const testCases = [
    [8, 1],
    [6, 2],
    [17, 4],
    [32, 6],
    [0, 3],
    [3, 5],
    [1, 4],
    [100, 9],
  ];

  for (const [value, parts] of testCases) {
    const result = splitInteger(value, parts);
    const sum = result.reduce((a, b) => a + b, 0);

    expect(sum).toBe(value);
  }
});

test('should ensure the difference between max and min is at most 1', () => {
  const testCases = [
    [17, 4],
    [32, 6],
    [3, 5],
    [0, 3],
    [1, 4],
    [100, 9],
  ];

  for (const [value, parts] of testCases) {
    const result = splitInteger(value, parts);
    const min = Math.min(...result);
    const max = Math.max(...result);

    expect(max - min).toBeLessThanOrEqual(1);
  }
});
