'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts 
if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(50, 5);

  expect(result).toStrictEqual([10, 10, 10, 10, 10]);
});

test(`should return a part equals to a value 
when splitting into 1 part`, () => {
  expect(splitInteger(30, 1)).toStrictEqual([30]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(14, 3)).toStrictEqual([4, 5, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 5)).toStrictEqual([0, 0, 1, 1, 1]);
});
