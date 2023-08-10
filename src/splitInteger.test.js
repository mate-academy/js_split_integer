'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(12, 4);

  expect(result).toEqual([3, 3, 3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 8;
  const numberOfParts = 1;
  const result = splitInteger(value, numberOfParts);

  expect(result[0]).toBe(value);
});

test('should sort parts ascending if they are not equal', () => {
  const value = 15;
  const numberOfParts = 5;
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual(result.sort(value[1], value[2]));
});

test('should add zeros if value < numberOfParts', () => {
  const value = 7;
  const numberOfParts = 10;
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([0, 0, 0, 1, 1, 1, 1, 1, 1, 1]);
});
