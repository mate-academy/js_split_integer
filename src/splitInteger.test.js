'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts 
if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 2)).toEqual([4, 4]);
});

test(`should return a part equals to a value 
when splitting into 1 part`, () => {
  expect(splitInteger(24, 1)).toEqual([24]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(32, 5)).toEqual([6, 6, 6, 7, 7]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(4, 5)).toContain(0);
});

test('should return an array with length equal to number of parts', () => {
  expect(splitInteger(48, 7)).toHaveLength(7);
});

test('should return an array', () => {
  expect(splitInteger(21, 8)).toBeInstanceOf(Array);
});
