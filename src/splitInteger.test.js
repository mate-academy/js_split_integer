'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const value = 12;
  const numberOfParts = 4;
  const expected = [3, 3, 3, 3];
  const actual = splitInteger(value, numberOfParts);

  expect(actual).toEqual(expected);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 12;
  const numberOfParts = 1;
  const expected = [12];
  const actual = splitInteger(value, numberOfParts);

  expect(actual).toEqual(expected);
});

test('should sort parts ascending if they are not equal', () => {
  const value = 14;
  const numberOfParts = 4;
  const expected = [3, 3, 4, 4];
  const actual = splitInteger(value, numberOfParts);

  expect(actual).toEqual(expected);
});

test('should add zeros if value < numberOfParts', () => {
  const value = 4;
  const numberOfParts = 6;
  const expected = [0, 0, 1, 1, 1, 1];
  const actual = splitInteger(value, numberOfParts);

  expect(actual).toEqual(expected);
});
