'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(30, 5)).toStrictEqual([6, 6, 6, 6, 6]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(6, 1)).toStrictEqual([6]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(14, 4)).toStrictEqual([3, 3, 4, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 6)).toStrictEqual([0, 0, 0, 1, 1, 1]);
});
