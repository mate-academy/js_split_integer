'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 2)).toEqual([5, 5]);
  expect(splitInteger(15, 3)).toEqual([5, 5, 5]);
  expect(splitInteger(20, 4)).toEqual([5, 5, 5, 5]);
  expect(splitInteger(100, 5)).toEqual([20, 20, 20, 20, 20]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(5, 1)).toEqual([5]);
  expect(splitInteger(10, 1)).toEqual([10]);
  expect(splitInteger(100, 1)).toEqual([100]);
  expect(splitInteger(999, 1)).toEqual([999]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  expect(splitInteger(20, 3)).toEqual([6, 7, 7]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(100, 3)).toEqual([33, 33, 34]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 4)).toEqual([0, 0, 1, 1]);
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
  expect(splitInteger(1, 3)).toEqual([0, 0, 1]);
  expect(splitInteger(4, 6)).toEqual([0, 0, 1, 1, 1, 1]);
});
