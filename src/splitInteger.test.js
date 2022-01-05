'use strict';

const splitInteger = require('./splitInteger');

test(`should be declared`, () => {
  expect(splitInteger)
    .toBeInstanceOf(Function);
});

test(`should return an array`, () => {
  expect(splitInteger([2, 4]))
    .toBeInstanceOf(Array);
});

test(`should split a number into equal parts 
if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(20, 4))
    .toEqual([5, 5, 5, 5]);
});

test(`should return a part equals to
 a value when splitting into 1 part`, () => {
  expect(splitInteger(6, 1))
    .toEqual([6]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(12, 5))
    .toEqual([2, 2, 2, 3, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 3))
    .toEqual([0, 1, 1]);
});
