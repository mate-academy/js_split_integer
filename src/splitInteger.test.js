'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 1)).toStrictEqual([8]);
});

test(`should return a part equals to a value
  when splitting into one part`, () => {
  expect(splitInteger(6, 2)).toStrictEqual([3, 3]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 4)).toStrictEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(32, 6)).toStrictEqual([5, 5, 5, 5, 6, 6]);
});
