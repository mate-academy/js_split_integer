'use strict';

const splitInteger = require('./splitInteger');

describe('splitInteger function', () => {
  test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
    expect(splitInteger(16, 4)).toEqual([4, 4, 4, 4]);
  });

  test(`should return a part equals to a value
  when splitting into 1 part`, () => {
    expect(splitInteger(16, 1)).toEqual([16]);
  });

  test('should sort parts ascending if they are not equal', () => {
    expect(splitInteger(23, 4)).toEqual([5, 6, 6, 6]);
  });

  test('should add zeros if value < numberOfParts', () => {
    expect(splitInteger(4, 5)).toEqual([0, 1, 1, 1, 1]);
  });
});
