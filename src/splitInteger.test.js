'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(12, 3);

  expect(result).toEqual([4, 4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);

  expect(result).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(9, 2);

  expect(result).toEqual([4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(2, 5);

  expect(result).toEqual([0, 0, 0, 1, 1]);
});
