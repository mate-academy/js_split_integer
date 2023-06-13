'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(6, 1)).toEqual([6]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(6, 1)).not.toEqual([6, 1]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 6)).not.toBe([0]);
});
