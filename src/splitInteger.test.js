'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(2, 1)).toEqual([2]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 1)).toEqual([10].sort());
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(0, 1)).toEqual([0]);
});
