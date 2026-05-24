'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(9, 3)).toEqual([3, 3, 3]);
  expect(splitInteger(10, 2)).toEqual([5, 5]);
  expect(splitInteger(0, 4)).toEqual([0, 0, 0, 0]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(5, 1)).toEqual([5]);
  expect(splitInteger(0, 1)).toEqual([0]);
  expect(splitInteger(1000000, 1)).toEqual([1000000]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  expect(splitInteger(7, 3)).toEqual([2, 2, 3]);
  expect(splitInteger(11, 4)).toEqual([2, 3, 3, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
  expect(splitInteger(1, 4)).toEqual([0, 0, 0, 1]);
  expect(splitInteger(0, 3)).toEqual([0, 0, 0]);
});

test('should return an array of numbers', () => {
  const result = splitInteger(10, 3);

  expect(Array.isArray(result)).toBe(true);
  result.forEach((part) => expect(typeof part).toBe('number'));
});

test('should return an array with the correct number of parts', () => {
  expect(splitInteger(10, 3)).toHaveLength(3);
  expect(splitInteger(7, 5)).toHaveLength(5);
  expect(splitInteger(0, 4)).toHaveLength(4);
});

test('should have parts that sum to the original value', () => {
  const cases = [
    [9, 3],
    [10, 3],
    [7, 5],
    [1000000, 7],
    [0, 4],
  ];

  cases.forEach(([value, parts]) => {
    const result = splitInteger(value, parts);
    const sum = result.reduce((acc, n) => acc + n, 0);

    expect(sum).toBe(value);
  });
});

test('should handle large numbers correctly', () => {
  expect(splitInteger(1000000, 4)).toEqual([250000, 250000, 250000, 250000]);
  expect(splitInteger(1000001, 4)).toEqual([250000, 250000, 250000, 250001]);
});
