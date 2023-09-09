'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 4)).toEqual([2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(4, 2)).toEqual([1, 1, 2, 2, 1, 1]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 2)).toEqual([0, 1]);
});
