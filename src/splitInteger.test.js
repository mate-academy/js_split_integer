'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(8, 2);

  expect(result).toEqual([4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(5, 1);

  expect(result).toEqual([5]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(13, 4);

  expect(result).toEqual([3, 3, 3, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 4);

  expect(result).toEqual([0, 1, 1, 1]);
});
