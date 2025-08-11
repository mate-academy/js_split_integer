'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 2)).toEqual([4, 4]);
  expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(555, 1)).toEqual([555]);
  expect(splitInteger(9872651, 1)).toEqual([9872651]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(41, 4)).toEqual([10, 10, 10, 11]);
  expect(splitInteger(9, 2)).toEqual([4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 10)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
  expect(splitInteger(2, 4)).toEqual([0, 0, 1, 1]);
});
