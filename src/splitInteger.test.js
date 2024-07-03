'use strict';

const splitInteger = require('./splitInteger');
// const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const parts = splitInteger(4, 2);

  expect(parts).toEqual([2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const parts = splitInteger(6, 1);

  expect(parts).toEqual([6]);
});

test('should sort parts ascending if they are not equal', () => {
  const parts = splitInteger(23, 4);

  expect(parts).toEqual([5, 6, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const parts = splitInteger(4, 8);

  expect(parts).toEqual([0, 0, 0, 0, 1, 1, 1, 1]);
});
