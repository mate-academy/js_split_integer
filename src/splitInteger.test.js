'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const number = 10;
  const numberOfParts = 2;

  const result = splitInteger(number, numberOfParts);

  expect(result).toEqual(expect.arrayContaining([5, 5]));
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const number = 10;
  const numberOfParts = 1;

  const result = splitInteger(number, numberOfParts);

  expect(result).toEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  const number = 10;
  const numberOfParts = 3;

  const result = splitInteger(number, numberOfParts);

  expect(result).toEqual([3, 3, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  const number = 5;
  const numberOfParts = 8;

  const result = splitInteger(number, numberOfParts);

  expect(result).toEqual([0, 0, 0, 1, 1, 1, 1, 1]);
});

