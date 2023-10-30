'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 4)).toEqual([2, 2, 2, 2]);
  expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
  expect(splitInteger(20, 2)).toEqual([10, 10]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(10, 1)).toEqual([10]);
  expect(splitInteger(15, 1)).toEqual([15]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(6, 3)).toEqual([2, 2, 2]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 5)).toEqual([0, 0, 0, 0, 1]);
});
