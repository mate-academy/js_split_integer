'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(21, 3)).toStrictEqual([7, 7, 7]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(13, 1)).toStrictEqual([13]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(31, 5)).toStrictEqual([6, 6, 6, 6, 7]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(5, 6)).toStrictEqual([0, 1, 1, 1, 1, 1]);
});
