'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(20, 4)).toStrictEqual([5, 5, 5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(20, 1)).toStrictEqual([20]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 3)).toStrictEqual([3, 3, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 3)).toStrictEqual([0, 0, 1]);
});
