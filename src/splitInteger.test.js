'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 4)).toEqual([2, 2, 2, 2]);
  expect(splitInteger(24, 6)).toEqual([4, 4, 4, 4, 4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(55, 1)).toEqual([55]);
  expect(splitInteger(1234567890, 1)).toEqual([1234567890]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(19, 3)).toEqual([6, 6, 7]);

  expect(splitInteger(57, 7)).toEqual([8, 8, 8, 8, 8, 8, 9]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 10)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
  expect(splitInteger(2, 8)).toEqual([0, 0, 0, 0, 0, 0, 1, 1]);
});
