'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 2)).toEqual([4, 4]);
  expect(splitInteger(10, 2)).toEqual([5, 5]);
  expect(splitInteger(18, 3)).toEqual([6, 6, 6]);
  expect(splitInteger(28, 4)).toEqual([7, 7, 7, 7]);
  expect(splitInteger(0, 5)).toEqual([0, 0, 0, 0, 0]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(27, 1)).toEqual([27]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(13, 2)).toEqual([6, 7]);
  expect(splitInteger(23, 3)).toEqual([7, 8, 8]);
  expect(splitInteger(15, 4)).toEqual([3, 4, 4, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(0, 1)).toEqual([0]);
  expect(splitInteger(5, 6)).toEqual([0, 1, 1, 1, 1, 1]);
});
