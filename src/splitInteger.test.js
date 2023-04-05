'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const arrayOfIntegers = splitInteger(6, 2);

  expect(arrayOfIntegers)
    .toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const arrayOfIntegers = splitInteger(13, 1);

  expect(arrayOfIntegers)
    .toEqual([13]);
});

test('should sort parts ascending if they are not equal', () => {
  const arrayOfIntegers = splitInteger(32, 6);

  expect(arrayOfIntegers)
    .toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const arrayOfIntegers = splitInteger(1, 6);

  expect(arrayOfIntegers)
    .toEqual([0, 0, 0, 0, 0, 1]);
});
