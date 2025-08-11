'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(10, 2)).toEqual([5, 5]);
  expect(splitInteger(18, 3)).toEqual([6, 6, 6]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(13, 3)).toEqual([4, 4, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(4, 1)).toEqual([4]);
  expect(splitInteger(12, 1)).toEqual([12]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(12, 3)).toEqual([4, 4, 4]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
});
