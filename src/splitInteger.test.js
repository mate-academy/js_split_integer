'use strict';

const splitInteger = require('./splitInteger');


test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const numberToSplit = 12;
  const numberOfParts = 4;
  const expectedParts = [3, 3, 3, 3];
  const result = splitInteger(numberToSplit, numberOfParts);

  expect(result).toEqual(expectedParts);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const numberToSplit = 2;
  const numberOfParts = 1;
  const expectedParts = [2];
  const result = splitInteger(numberToSplit, numberOfParts);

  expect(result).toEqual(expectedParts);
});

test('should sort parts ascending if they are not equal', () => {
  const numberToSplit = 17;
  const numberOfParts = 5;
  const result = splitInteger(numberToSplit, numberOfParts);

  const sortedArr = [...result].sort((a, b) => a - b)

  expect(result).toEqual(sortedArr);
});

test('should add zeros if value < numberOfParts', () => {
  const numberToSplit = 0;
  const numberOfParts = 1;
  const expectedParts = [0];
  const result = splitInteger(numberToSplit, numberOfParts);

  expect(result).toEqual(expectedParts);
});
