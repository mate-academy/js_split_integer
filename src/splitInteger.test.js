'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const expectedOutput = [4, 4, 4];

  const result = splitInteger(12, 3);

  expect(result).toEqual(expectedOutput);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const expectedOutput = [7];

  const result = splitInteger(7, 1);

  expect(result).toEqual(expectedOutput);
});

test('should sort parts ascending if they are not equal', () => {
  const expectedOutput = [3, 3, 4];

  const result = splitInteger(10, 3);

  expect(result).toEqual(expectedOutput);
});

test('should add zeros if value < numberOfParts', () => {
  const expectedOutput = [0, 0, 1, 1, 1];

  const result = splitInteger(3, 5);

  expect(result).toEqual(expectedOutput);
});
