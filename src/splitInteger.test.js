'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(16, 4)).toEqual([4, 4, 4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(5, 1)).toEqual([5]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(121, 4)).toEqual([30, 30, 30, 31]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 4)).toEqual([0, 0, 0, 1]);
});
