'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(10, 2);

  expect(result).toEqual([5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(10, 1);

  expect(result).toEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(5, 2);

  expect(result).toEqual([2, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(1, 2);

  expect(result).toEqual([0, 1]);
});
