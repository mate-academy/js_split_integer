'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(12, 4)).toEqual([3, 3, 3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(15, 1)).toEqual([15]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(11, 3)).toEqual([3, 4, 4]);
  expect(splitInteger(20, 6)).toEqual([3, 3, 3, 3, 4, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 4)).toEqual([0, 0, 1, 1]);
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
});
