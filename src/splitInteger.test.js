'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(12, 3)).toEqual([4, 4, 4])
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(22, 1)).toEqual([22])
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6])
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 6)).toEqual([0, 0, 0, 1, 1, 1])
});
