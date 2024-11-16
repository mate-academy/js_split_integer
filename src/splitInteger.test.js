'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 2))
    .toBe(5, 5);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(10, 1))
    .toBe(10);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(11, 2))
    .toBe(5, 6);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 2))
    .toBe(0.5, 0.5);
});
