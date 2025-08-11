'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2))
    .toEqual([3, 3]);

  expect(splitInteger(100, 5))
    .toEqual([20, 20, 20, 20, 20]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(15, 1))
    .toEqual([15]);

  expect(splitInteger(5, 1))
    .toEqual([5]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 4))
    .toEqual([4, 4, 4, 5]);

  expect(splitInteger(32, 6))
    .toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 6))
    .toEqual([0, 0, 0, 0, 1, 1]);

  expect(splitInteger(1, 2))
    .toEqual([0, 1]);
});
