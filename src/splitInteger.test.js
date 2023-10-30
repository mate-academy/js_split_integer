'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const value = 36;
  const numberOfParts = 6;

  for (let i = 1; i < numberOfParts; i++) {
    expect(splitInteger(value, numberOfParts)[0] === splitInteger(value, numberOfParts)[i]).toBe(true);
  }
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 16;

  expect(splitInteger(value, 1)).toStrictEqual([value]);
});

test('should sort parts ascending if they are not equal', () => {
  const value = 33;
  const numberOfParts = 6;

  for (let i = 0; i < numberOfParts - 1; i++) {
    expect(splitInteger(value, numberOfParts)[i] <= splitInteger(value, numberOfParts)[i + 1]).toBe(true);
  }
});

test('should add zeros if value < numberOfParts', () => {
  const value = 2;
  const numberOfParts = 4;

  for (let i = 0; i < numberOfParts - value; i++) {
    expect(splitInteger(value, numberOfParts)[i] === 0).toBe(true);
  }
});
