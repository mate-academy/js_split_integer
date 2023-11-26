'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 2)).toStrictEqual([4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(10, 1)).toStrictEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 4)).toStrictEqual([2, 2, 3, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 5)).toStrictEqual([0, 0, 1, 1, 1]);
});

test('should be difference between the max and min number in the array should be <= 1', () => {
  const max = splitInteger(4, 3)[0];
  const min = splitInteger(4, 3)[splitInteger.length - 1];

  expect(max - min).toStrictEqual(0, 1);
});
