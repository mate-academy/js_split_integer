'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(16, 2)).toEqual([8, 8]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(20, 1)).toEqual([20]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(25, 6)).toEqual([4, 4, 4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 6)).toEqual([0, 0, 0, 0, 0, 1]);
});
