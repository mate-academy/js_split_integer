'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(32, 4);

  expect(result).toEqual([8, 8, 8, 8]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(55, 1)).toEqual([55]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(31, 3)).toEqual([10, 10, 11]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(5, 8)).toEqual([0, 0, 0, 1, 1, 1, 1, 1]);
});
