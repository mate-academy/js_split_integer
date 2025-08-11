'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(12, 3);
  const expected = [4, 4, 4];

  expect(result).toEqual(expected);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);
  const expected = [8];

  expect(result).toEqual(expected);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(13, 4);
  const expected = [3, 3, 3, 4];

  expect(result).toEqual(expected);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(5, 8);
  const expected = [0, 0, 0, 1, 1, 1, 1, 1];

  expect(result).toEqual(expected);
});
