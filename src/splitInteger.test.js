'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 2)).toEqual([5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 10;
  const numberOfParts = 1;
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([value]);
});

test('should sort parts ascending if they are not equal', () => {
  const value = 10;
  const numberOfParts = 4;
  const expected = [2, 2, 3, 3];

  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual(expected);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 5);

  expect(result).toEqual([0, 0, 1, 1, 1]);
});
