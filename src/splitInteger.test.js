'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
expect(splitInteger(20, 5)).toEqual([4, 4, 4, 4, 4])
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
expect(splitInteger(3, 3)).toEqual([1, 1, 1])
});

test('should sort parts ascending if they are not equal', () => {
expect(splitInteger(32, 5)).toEqual([6, 6, 6, 7, 7])
});

test('should add zeros if value < numberOfParts', () => {
expect(splitInteger(2, 4)).toEqual([0, 0, 1, 1])
});
