'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(20, 5);

  result.forEach((value) => expect(result[0]).toBe(value));
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 8;
  const result = splitInteger(value, 1);

  expect(result[0]).toBe(value);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(33, 5);

  expect(result).toEqual([6, 6, 7, 7, 7]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 4);

  expect(result).toEqual([0, 1, 1, 1]);
});
