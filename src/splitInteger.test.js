'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(6, 2);

  expect(result[0]).toEqual(result[1]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(32, 1);

  expect(result.length).toBe(1);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(32, 6);

  const sortedResult = result.sort((v1, v2) => v1 - v2);

  expect(result).toEqual(sortedResult);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(4, 5);

  expect(result).toContain(0);
});
