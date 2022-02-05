/* eslint-disable max-len */
'use strict';

const { splitInteger } = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  const splitIntegerDivisible = splitInteger(6, 2);

  expect(splitIntegerDivisible).toEqual([3, 3]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  const splitIntegerSinglePart = splitInteger(8, 1);

  expect(splitIntegerSinglePart).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const splitIntegerAsc = splitInteger(17, 4);

  expect(splitIntegerAsc).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const splitIntegerNegative = splitInteger(2, 8);

  expect(splitIntegerNegative).toEqual([0, 0, 0, 0, 0, 0, 1, 1]);
});

// splitInteger(8, 1) === [8]
// splitInteger(6, 2) === [3, 3]
// splitInteger(17, 4) === [4, 4, 4, 5]
// splitInteger(32, 6) === [5, 5, 5, 5, 6, 6]
