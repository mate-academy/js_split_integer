'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const parts = splitInteger(18, 3);

  expect(parts).toEqual([6, 6, 6]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const parts = splitInteger(7, 1);

  expect(parts).toEqual([7]);
});

test('should sort parts ascending if they are not equal', () => {
  const parts = splitInteger(8, 3);

  expect(parts).toEqual([2, 3, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  const parts = splitInteger(6, 8);

  expect(parts).toEqual([0, 0, 1, 1, 1, 1, 1, 1]);
});
