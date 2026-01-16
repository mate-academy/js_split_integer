'use strict';

const {
  toBeSortedAscending,
  hasSpilitEqual,
  hasEqualValueToNumber,
  zerosCounts,
  howManyZerosInArray,
} = require('./customs');

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(34, 2);
  const resultOfCustoms = hasSpilitEqual(result, 34, 2);

  expect(resultOfCustoms).toEqual(true);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(34, 1);
  const resultOfCustoms = hasEqualValueToNumber(result, 34);

  expect(resultOfCustoms).toEqual([34]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(34, 5);

  expect(toBeSortedAscending(result)).toBe(true);
});

test('should add zeros if value < numberOfParts', () => {
  const result = howManyZerosInArray(splitInteger(2, 4));

  expect(zerosCounts(2, 4)).toBe(result);
});
