'use strict';

const splitInteger = require('./splitInteger');

it(`should split a number into equal parts 
  if a value is divisible by a numberOfParts`, () => {
  const value = 10;
  const numberOfParts = 5;
  const expectedResult = [2, 2, 2, 2, 2];

  expect(splitInteger(value, numberOfParts)).toEqual(expectedResult);
});

it(`should return a part equals to a value 
  when splitting into 1 part`, () => {
  const value = 8;
  const numberOfParts = 1;
  const expectedResult = [8];

  expect(splitInteger(value, numberOfParts)).toEqual(expectedResult);
});

it('should sort parts ascending if they are not equal', () => {
  const value = 15;
  const numberOfParts = 4;
  const expectedResult = [3, 4, 4, 4];

  expect(splitInteger(value, numberOfParts)).toEqual(expectedResult);
});

it('should add zeros if value < numberOfParts', () => {
  const value = 2;
  const numberOfParts = 4;
  const expectedResult = [0, 0, 1, 1];

  expect(splitInteger(value, numberOfParts)).toEqual(expectedResult);
});
