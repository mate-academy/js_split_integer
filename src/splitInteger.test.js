'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 4)).toStrictEqual([2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(2, 1)).toStrictEqual([2]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(9, 2)).toStrictEqual([4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 2)).toStrictEqual([0, 1]);
});
