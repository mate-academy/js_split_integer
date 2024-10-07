'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(15, 3)).toEqual([5, 5, 5]);
  expect(splitInteger(20, 5)).toEqual([4, 4, 4, 4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(1, 1)).toEqual([1]);
  expect(splitInteger(10, 1)).toEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  expect(splitInteger(14, 3)).toEqual([4, 5, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  expect(splitInteger(13, 3)).toEqual([4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 3)).toEqual([0, 1, 1]);
  expect(splitInteger(0, 4)).toEqual([0, 0, 0, 0]);
  expect(splitInteger(1, 2)).toEqual([0, 1]);
});
