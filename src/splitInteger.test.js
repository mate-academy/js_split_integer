'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
expect(splitInteger(2, 2)).toBe([1, 1]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
expect(splitInteger(2, 1)).toBe(2);
});

test('should sort parts ascending if they are not equal', () => {
expect(splitInteger(3, 2)).toBe([1, 2]);
});

test('should add zeros if value < numberOfParts', () => {
expect(splitInteger(0, 0)).toBe(0);
});
