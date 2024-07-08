'use strict';

const splitInteger = require('./splitInteger');

describe('split integer tests', () => {
  test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
    const value = 5;
    const numberOfParts = 5;
    const expected = [1, 1, 1, 1, 1];
    const result = splitInteger(value, numberOfParts);

    expect(result).toEqual(expected);
  });

  test(`should return a part equals to a value
  when splitting into 1 part`, () => {
    const value = 5;
    const numberOfParts = 1;
    const expected = [5];
    const result = splitInteger(value, numberOfParts);

    expect(result).toEqual(expected);
  });

  test('should sort parts ascending if they are not equal', () => {
    const value = 5;
    const numberOfParts = 3;
    const expected = [1, 2, 2];
    const result = splitInteger(value, numberOfParts).sort((a, b) => a - b);

    expect(result).toEqual(expected);
  });

  test('should add zeros if value < numberOfParts', () => {
    const value = 5;
    const numberOfParts = 7;
    const expected = [0, 0, 1, 1, 1, 1, 1];
    const result = splitInteger(value, numberOfParts).sort((a, b) => a - b);

    expect(result).toEqual(expected);
    expect(result).toContain(0);
  });
});
