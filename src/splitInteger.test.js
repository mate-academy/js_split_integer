'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts 
if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(16, 4)).toStrictEqual([4, 4, 4, 4]);
});

test(`should return a part equals to a value 
when splitting into 1 part`, () => {
  expect(splitInteger(10, 1)).toStrictEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(11, 2)).toStrictEqual([5, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 4)).toStrictEqual([0, 0, 1, 1]);
});
