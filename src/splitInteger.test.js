'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(12, 4))
    .toStrictEqual([3, 3, 3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(5, 1))
    .toStrictEqual([5]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(19, 3))
    .toStrictEqual([6, 6, 7]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 3))
    .toStrictEqual([0, 1, 1]);
});
