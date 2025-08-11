'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(4, 2);

  expect(result).toEqual([2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(4, 1);

  expect(result).toEqual([4]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(5, 3);

  expect(result).toEqual([1, 2, 2]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(5, 6);

  expect(result).toEqual([0, 1, 1, 1, 1, 1]);
});
