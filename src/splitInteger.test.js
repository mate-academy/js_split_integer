'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value 
    is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 2))
    .toEqual([4, 4]);
});

test(`should return a part equals to a 
    value when splitting into 1 part`, () => {
  expect(splitInteger(8, 1))
    .toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(20, 3))
    .toEqual([6, 7, 7]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 3))
    .toEqual([0, 0, 1]);
});
