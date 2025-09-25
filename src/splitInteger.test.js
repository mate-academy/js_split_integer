'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(20, 5)).toEqual([4, 4, 4, 4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(100, 1)).toEqual([100]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4); // → [4, 4, 4, 5]
  expect(result).toEqual([4, 4, 4, 5]);
  expect(result).toEqual(result.slice().sort((a, b) => a - b));
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
  expect(splitInteger(1, 4)).toEqual([0, 0, 0, 1]);
});
test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 5);
  expect(result).toEqual([0, 0, 1, 1, 1]);
  checkInvariants(result, 3, 5);
});
