'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 8)).toEqual([1, 1, 1, 1, 1, 1, 1, 1]);
  expect(splitInteger(6, 6)).toEqual([1, 1, 1, 1, 1, 1]);

  expect(splitInteger(17, 17))
    .toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
});

test('should sort parts ascending if they are not equal', () => {
  const parts = splitInteger(17, 4);

  for (let i = 0; i < parts.length - 1; i++) {
    expect(parts[i]).toBeLessThanOrEqual(parts[i + 1]);
  }
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 5)).toEqual([0, 0, 0, 0, 1]);
  expect(splitInteger(5, 10)).toEqual([0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
});
