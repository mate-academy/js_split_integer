'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
    const value = 10;
    const numberOfParts = 5;
    const result = splitInteger(value, numberOfParts);
    const expected = [2, 2, 2, 2, 2]; 
    expect(result).toEqual(expected);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
    const value = 10;
    const numberOfParts = 1;
    const result = splitInteger(value, numberOfParts);
    const expected = [10];
    expect(result).toEqual(expected);
});

test('should sort parts ascending if they are not equal', () => {
  const value = 10;
  const numberOfParts = 4;
  const result = splitInteger(value, numberOfParts);
  const expected = [2, 2, 3, 3]; 
  expect(result).toEqual(expected);
});

test('should add zeros if value < numberOfParts', () => {
  const value = 3;
  const numberOfParts = 5;
  const result = splitInteger(value, numberOfParts);
  const expected = [0, 0, 1, 1, 1]; 
  expect(result).toEqual(expected);
});
