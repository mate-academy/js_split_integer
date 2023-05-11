'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const parts = [6, 6, 6, 6, 6, 6];

  expect(splitInteger(36, 6))
    .toEqual(parts);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(5, 1))
    .toEqual([5]);
});

test('should sort parts ascending if they are not equal', () => {
  const parts = [5, 5, 5, 5, 6, 6];

  expect(splitInteger(32, 6))
    .toEqual(parts);
});

test('should add zeros if value < numberOfParts', () => {
  const parts = [0, 1, 1];

  expect(splitInteger(2, 3))
    .toEqual(parts);
});
