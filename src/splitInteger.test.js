'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 1)).toEqual([10]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 2)).toEqual([4, 4]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(25, 4)).toEqual([6, 6, 6, 7]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(43, 6)).toEqual([7, 7, 7, 7, 7, 8]);
});