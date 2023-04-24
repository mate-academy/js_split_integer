'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2))
    .toEqual([3, 3]);
});

test(`should return 0's if value = 0`, () => {
  expect(splitInteger(0, 5))
    .toEqual([0, 0, 0, 0, 0]);
});

test(`should return an empty array if numberOfParts = 0`, () => {
  expect(splitInteger(2, 0))
    .toEqual([]);
});

test(`should return an empty array if inputs are negative`, () => {
  expect(splitInteger(-2, -1))
    .toEqual([]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(2, 1))
    .toEqual([2]);
});

test('should sort positive integer parts ascending if they are not equal', () => {
  expect(splitInteger(7, 3))
    .toEqual([2, 2, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 4))
    .toEqual([0, 0, 1, 1]);
});
