'use strict';

// eslint-disable-next-line no-unused-vars
const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(6, 2)
    .toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(4, 1)
    .toEqual([4]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(17, 4)
    .toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(1, 4)
    .toEqual([0, 0, 0, 4]);
});
