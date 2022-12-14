/* eslint-disable max-len */
'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(30, 6))
    .toStrictEqual([5, 5, 5, 5, 5, 5]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  expect(splitInteger(30, 1))
    .toStrictEqual([30]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(31, 3))
    .toStrictEqual([10, 10, 11]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 4))
    .toStrictEqual([0, 1, 1, 1]);
});
