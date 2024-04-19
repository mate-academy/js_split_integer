'use strict';

// const { expect } = require('chai');
const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(9, 1)).toEqual([9]);
  expect(splitInteger(8, 2)).toEqual([4, 4]);
  expect(splitInteger(20, 4)).toEqual([5, 5, 5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(40, 1)).toEqual([40]);
  expect(splitInteger(24, 1)).toEqual([24]);
  expect(splitInteger(39, 1)).toEqual([39]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(13, 3)).toEqual([4, 4, 5]);
  expect(splitInteger(17, 2)).toEqual([8, 9]);
  expect(splitInteger(25, 4)).toEqual([6, 6, 6, 7]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 8)).toEqual([0, 0, 0, 0, 0, 0, 1, 1]);
  expect(splitInteger(4, 6)).toEqual([0, 0, 1, 1, 1, 1]);
  expect(splitInteger(5, 10)).toEqual([0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
});
