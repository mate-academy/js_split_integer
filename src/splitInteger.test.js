'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 5)).toHaveLength(5);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(7, 1)).toEqual([7]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);
  const resultLength = result.length;

  for (let i = 1; i < resultLength; i++) {
    expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
  }
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(6, 7)).toContain(0);
});
