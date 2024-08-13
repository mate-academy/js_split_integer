'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const parts = splitInteger(8, 1);

  expect(parts).toEqual([8]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const parts = splitInteger(5, 1);

  expect(parts).toEqual([5]);
});

test('should sort parts ascending if they are not equal', () => {
  const parts = splitInteger(7, 3);

  expect(parts).toEqual([2, 2, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  const parts = splitInteger(5, 3);

  expect(parts).toEqual([1, 2, 2]);
});
