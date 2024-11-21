'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const value = 12;
  const numberOfParts = 4;
  const result = splitInteger(value, numberOfParts);

  expect(result.length).toBe(numberOfParts);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 12;
  const numberOfParts = 1;
  const result = splitInteger(value, numberOfParts);

  expect(Number(result.join(''))).toBe(value);
});

test('should sort parts ascending if they are not equal', () => {
  const value = 32;
  const numberOfParts = 6;
  const result = splitInteger(value, numberOfParts).sort((a, b) => a - b);
  const expectedResult = [5, 5, 5, 5, 6, 6];

  expect(result).toEqual(expectedResult);
});

test('should add zeros if value < numberOfParts', () => {
  const value = 2;
  const numberOfParts = 10;
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1, 1]);
});
