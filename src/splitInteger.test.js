'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(6, 3)).toEqual([2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(23, 7)).toEqual([3, 3, 3, 3, 3, 4, 4]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(4, 7)).toEqual([0, 0, 0, 1, 1, 1, 1]);
  expect(splitInteger(0, 2)).toEqual([0, 0]);
});
