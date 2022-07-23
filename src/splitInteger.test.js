'use strict';
/* eslint-disable */

const splitInteger = require('./splitInteger');

it(`should be declared`, () => {
  expect(splitInteger).toBeInstanceOf(Function);
});

it(`should return 'Array'`, () => {
  expect(splitInteger()).toBeInstanceOf(Array);
});

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toStrictEqual([3, 3]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  expect(splitInteger(10, 1)).toStrictEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(32, 6)).toStrictEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(0, 2)).toStrictEqual([0, 0]);
});
