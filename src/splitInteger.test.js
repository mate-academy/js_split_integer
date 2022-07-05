'use strict';

const splitInteger = require('./splitInteger');

test(
  `should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
    const value = 6;
    const numberOfParts = 2;

    expect(splitInteger(value, numberOfParts)).toEqual([3, 3]);
  });

test(`should return a part equals to a value when splitting into 1 part`,
  () => {
    const value = 8;
    const numberOfParts = 1;

    expect(splitInteger(value, numberOfParts)).toEqual([8]);
  });

test('should sort parts ascending if they are not equal', () => {
  const value = 32;
  const numberOfParts = 6;

  expect(splitInteger(value, numberOfParts)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const value = 4;
  const numberOfParts = 6;

  expect(splitInteger(value, numberOfParts)).toEqual([0, 0, 1, 1, 1, 1]);
});
