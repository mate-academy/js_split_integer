'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 4)).toEqual([2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(7, 1)).toEqual([7]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(27, 4)).toEqual([6, 7, 7, 7]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 4)).toEqual([0, 0, 1, 1]);
});
