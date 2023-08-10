'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const value = 10;
  const numberOfParts = 5;
  const expectedParts = [2, 2, 2, 2, 2];
  const parts = splitInteger(value, numberOfParts);

  expect(parts).toEqual(expectedParts);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 8;
  const numberOfParts = 1;
  const expectedParts = [8];
  const parts = splitInteger(value, numberOfParts);

  expect(parts).toEqual(expectedParts);
});

test('should sort parts ascending if they are not equal', () => {
  const value = 25;
  const numberOfParts = 6;
  const expectedParts = [4, 4, 4, 4, 4, 5];
  const parts = splitInteger(value, numberOfParts);

  expect(parts).toEqual(expectedParts);
});

test('should add zeros if value < numberOfParts', () => {
  const value = 2;
  const numberOfParts = 4;
  const expectedParts = [0, 0, 1, 1];
  const parts = splitInteger(value, numberOfParts);

  expect(parts).toEqual(expectedParts);
});
