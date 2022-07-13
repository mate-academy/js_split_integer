'use strict';

const splitInteger = require('./splitInteger');

test(`should return an empty array if a 'numberOfParts' < 0 `, () => {
  expect(splitInteger(3, -2))
    .toStrictEqual([]);
});

test(
  `should split a number into equal parts if 
  a value is divisible by a numberOfParts`,
  () => {
    expect(splitInteger(3, 3))
      .toStrictEqual([1, 1, 1]);
  });

test(
  `should return a part equals to a value when splitting into 1 part`,
  () => {
    expect(splitInteger(3, 1))
      .toStrictEqual([3]);
  });

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(7, 2))
    .toStrictEqual([3, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 3))
    .toStrictEqual([0, 1, 1]);
});

test('should return array of zero if value = 0', () => {
  expect(splitInteger(0, 3))
    .toStrictEqual([0, 0, 0]);
});

test('should return array of 1 if value and numberOfParts are the same', () => {
  expect(splitInteger(3, 3))
    .toStrictEqual([1, 1, 1]);
});
