'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts 
  if value is divisible by numberOfParts`, () => {
  expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
});

test('should return a part equals to value when splitting into 1 part', () => {
  expect(splitInteger(7, 1)).toEqual([7]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 3)).toEqual([0, 1, 1]);
});
