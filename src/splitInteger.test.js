'use strict';

const {
  // toBeSortedAscending,
  // hasSpilitEqual,
  hasEqualValueToNumber,
  // zerosCounts,
  // howManyZerosInArray,
} = require('./customs');

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);
  const resultOfCustoms = hasEqualValueToNumber(result, 8);

  expect(resultOfCustoms).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  // const result = splitInteger(17, 4);
  // expect(toBeSortedAscending(result)).toBe(true);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  // const result = howManyZerosInArray(splitInteger(2, 4));
  // expect(zerosCounts(2, 4)).toBe(result);
  expect(splitInteger(2, 4)).toEqual([0, 0, 1, 1]);
});
