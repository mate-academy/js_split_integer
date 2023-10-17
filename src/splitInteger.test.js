'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(20, 4))
    .toEqual([5, 5, 5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(1, 1))
    .toEqual([1]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(30, 4))
    .toEqual([7, 7, 8, 8]);
});

test('should add zeros if value is < numberOfParts', () => {
  expect(splitInteger(3, 5))
    .toEqual([0, 0, 1, 1, 1]);
});
