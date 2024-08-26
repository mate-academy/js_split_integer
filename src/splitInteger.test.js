'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const number = 150;
  const numberOfParts = 3;
  const expectedOutput = [50, 50, 50];
  const result = splitInteger(number, numberOfParts);

  expect(result).toEqual(expectedOutput);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const valueToSplit = 150;
  const numberOfParts = 1;
  const result = splitInteger(valueToSplit, numberOfParts);

  expect(result).toEqual([valueToSplit]);
});

test('should return parts sorted in asc order if they are not equal', () => {
  const value = 10;
  const numberOfParts = 3;
  const result = splitInteger(value, numberOfParts);
  const isSorted = result.every((part, index) => index
    === 0 || part >= result[index - 1]);

  expect(isSorted).toBe(true);
  expect(result.length).toBe(numberOfParts);
  expect(result.reduce((acc, curr) => acc + curr, 0)).toBe(value);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(1, 5);

  expect(result).toEqual([0, 0, 0, 0, 1]);
});
