'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(35, 7)).toEqual([5, 5, 5, 5, 5, 5, 5]);
  expect(splitInteger(18, 3)).toEqual([6, 6, 6]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(324, 1)).toEqual([324]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(38, 6)).toEqual([6, 6, 6, 6, 7, 7]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
});
