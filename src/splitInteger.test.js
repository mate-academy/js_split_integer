'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);

  expect(result).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);

  expect(result).toHaveLength(4);
  expect(result[0]).toBeLessThanOrEqual(result[1]);
  expect(result[1]).toBeLessThanOrEqual(result[2]);
  expect(result[2]).toBeLessThanOrEqual(result[3]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 5);

  expect(result).toHaveLength(5);
  expect(result).toEqual([0, 0, 1, 1, 1]);
});
