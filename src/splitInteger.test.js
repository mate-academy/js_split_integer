'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toStrictEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(6, 1)).toStrictEqual([6]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(32, 6)).toStrictEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 2)).toStrictEqual([0, 1]);
});
