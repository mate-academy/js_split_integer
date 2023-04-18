'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const parts = splitInteger(10, 2);

  expect(parts).toEqual([5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const parts = splitInteger(10, 1);

  expect(parts).toEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  const parts = splitInteger(15, 4);

  expect(parts).toEqual([3, 4, 4, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  const parts = splitInteger(1, 2);

  expect(parts).toEqual([0, 1]);
});
