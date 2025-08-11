'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(6, 2);
  const expectedResult = [3, 3];

  expect(result).toEqual(expectedResult);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(12, 1);
  const expectedResult = [12];

  expect(result).toEqual(expectedResult);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(19, 4);
  const expectedResult = [4, 5, 5, 5];

  expect(result).toEqual(expectedResult);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 4);
  const expectedResult = [0, 1, 1, 1];

  expect(result).toEqual(expectedResult);
});
