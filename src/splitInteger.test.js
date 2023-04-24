'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const value = 10;
  const numberOfParts = 5;
  const result = [2, 2, 2, 2, 2];

  expect(splitInteger(value, numberOfParts)).toEqual(result);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(10, 1)).toEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(13, 4)).toEqual([3, 3, 3, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  const value = 3;
  const numberOfParts = 5;
  const result = [0, 0, 1, 1, 1];

  expect(splitInteger(value, numberOfParts)).toEqual(result);
});
