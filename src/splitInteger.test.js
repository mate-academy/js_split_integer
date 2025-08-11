'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(972, 3);

  expect(result).toEqual([324, 324, 324]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(97, 1);

  expect(result).toEqual([97]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(1754, 4);

  expect(result).toEqual([438, 438, 439, 439]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(4, 6);

  expect(result).toEqual([0, 0, 1, 1, 1, 1]);
});
