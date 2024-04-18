'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(20, 2))
    .toEqual([10, 10]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(10, 1))
    .toEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(16, 3))
    .toEqual([5, 5, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 4))
    .toEqual([0, 0, 1, 1]);
}

);
