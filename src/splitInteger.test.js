'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const value = 100;
  const numberOfParts = 10;
  const expected = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual(expected);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 100;
  const numberOfParts = 1;
  const expected = [100];
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual(expected);
});

test('should sort parts ascending if they are not equal', () => {
  const value = 101;
  const numberOfParts = 5;
  const expected = [20, 20, 20, 20, 21];
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual(expected);
});

test('should add zeros if value < numberOfParts', () => {
  const value = 3;
  const numberOfParts = 5;
  const expected = [0, 0, 1, 1, 1];
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual(expected);
});
