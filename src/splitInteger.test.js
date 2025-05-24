'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 3)).toEqual([2, 2, 2]);
  expect(splitInteger(12, 4)).toEqual([3, 3, 3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(12, 1)).toEqual([12]);
  expect(splitInteger(421, 1)).toEqual([421]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(15, 4);

  expect(result).toEqual([3, 4, 4, 4]);
  expect(result).toEqual([...result].sort((a, b) => a - b));
});

test('should add zeros if value < numberOfParts', () => {
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

    expect(sum).toEqual(value);
  }
});
