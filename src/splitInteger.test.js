'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
    const value = 9;
    const numberOfParts = 3;
    const expectedResult = [3, 3, 3];

    expect(splitInteger(value, numberOfParts)).toEqual(expectedResult);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
    const value = 9;
    const numberOfParts = 1;
    const expectedResult = [9];

    expect(splitInteger(value, numberOfParts)).toEqual(expectedResult);
});

test('should sort parts ascending if they are not equal', () => {
  const value = 17;
  const numberOfParts = 3;
  const expectedResult = [5, 6, 6];

  expect(splitInteger(value, numberOfParts)).toEqual(expectedResult);
});

test('should add zeros if value < numberOfParts', () => {
  const value = 3;
  const numberOfParts = 5;
  const expectedResult = [0, 0, 1, 1, 1];

  expect(splitInteger(value, numberOfParts)).toEqual(expectedResult);
});
