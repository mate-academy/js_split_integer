'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(16, 4))
    .toEqual([4, 4, 4, 4]);
});

test(`should return a part equals
to a value when splitting into 1 part`, () => {
  expect(splitInteger(7, 1))
    .toEqual([7]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 5))
    .toEqual([3, 3, 3, 4, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 3))
    .toEqual([0, 1, 1]);
});
