'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number in equal parts if a value is divisible`, () => {
  expect(splitInteger(9, 3))
    .toEqual([3, 3, 3]);
});

test(`should return a part equals to a value when split into 1 part`, () => {
  expect(splitInteger(5, 1))
    .toEqual([5]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(7, 2))
    .toEqual([3, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 3))
    .toEqual([0, 0, 1]);
});
