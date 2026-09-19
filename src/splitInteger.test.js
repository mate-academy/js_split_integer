'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);

  for (let i = 0; i < result.length - 1; i++) {
    expect(result[i]).toBeLessThanOrEqual(result[i + 1]);
  }
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(2, 3);

  expect(result).toHaveLength(3);
  expect(result).toContain(0);
});
