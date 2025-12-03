'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const value = 100;
  const numberOfParts = 4;

  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([25, 25, 25, 25]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 100;
  const numberOfParts = 1;

  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([100]);
});

test('should sort parts ascending if they are not equal', () => {
  const value = 100;
  const numberOfParts = 3;

  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([33, 33, 34]);
});

test('should add zeros if value < numberOfParts', () => {
  const value = 2;
  const numberOfParts = 5;

  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([0, 0, 0, 1, 1]);
});
