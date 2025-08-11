'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {

  const value = 10;
  const numberOfParts = 5;
  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual([2, 2, 2, 2, 2])
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {

    const value = 10;
    const numberOfParts = 1;
    const result = splitInteger(value, numberOfParts)

    expect(result).toEqual([value])
});

test('should sort parts ascending if they are not equal', () => {
  const value = 10;
  const numberOfParts = 3;
  const result = splitInteger(value, numberOfParts)

  expect(result).toEqual([3, 3, 4])
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 5)).toEqual([0, 0, 0, 1, 1]);
});
