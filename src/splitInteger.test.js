'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(20, 5)).toEqual([4, 4, 4, 4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(4, 1)).toEqual([4]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(43, 5)).toEqual([8, 8, 9, 9, 9]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 6)).toEqual([0, 0, 0, 1, 1, 1]);
});

test('should return empty array if numberOfParts is 0', () => {
  expect(splitInteger(9, 0)).toEqual([]);
});
