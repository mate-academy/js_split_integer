'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(20, 5)).toEqual([4, 4, 4, 4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(7, 1)).toEqual([7]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(19, 2)).toEqual([9, 10]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(5, 7)).toEqual([0, 0, 1, 1, 1, 1, 1]);
});
