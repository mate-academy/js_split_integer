'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts`, () => {
  expect(splitInteger(12, 3))
    .toEqual([4, 4, 4]);
});

test(`should return a part equal to splitting into 1 part`, () => {
  expect(splitInteger(6, 1))
    .toEqual([6]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(9, 4))
    .toEqual([2, 2, 2, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 5))
    .toEqual([0, 0, 1, 1, 1]);
});
