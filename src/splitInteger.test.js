'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(30, 5)).toEqual([6, 6, 6, 6, 6]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(30, 1)).toEqual([30]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(23, 4)).toEqual([5, 6, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 2)).toEqual([0, 1]);
});
