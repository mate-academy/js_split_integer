'use strict';

const splitInteger = require('./splitInteger');

describe('#splitInteger', () => {
  test(`should split a number into equal parts
    if a value is divisible by a numberOfParts`, () => {
    const mockedValue = 12;
    const mockedNumberOfParts = 3;
    const splitedInteger = splitInteger(mockedValue, mockedNumberOfParts);

    expect(splitedInteger).toEqual([4, 4, 4]);
  });

  test(`should return a part equals to a
  value when splitting into 1 part`, () => {
    const mockedValue = 10;
    const mockedNumberOfParts = 1;

    expect(splitInteger(mockedValue, mockedNumberOfParts)).toEqual([10]);
  });

  test('should sort parts ascending if they are not equal', () => {
    const mockedValue = 19;
    const mockedNumberOfParts = 3;

    expect(splitInteger(mockedValue, mockedNumberOfParts)).toEqual([6, 6, 7]);
  });

  test('should add zeros if value < numberOfParts', () => {
    const mockedValue = 2;
    const mockedNumberOfParts = 5;

    expect(splitInteger(mockedValue, mockedNumberOfParts))
      .toEqual([0, 0, 0, 1, 1]);
  });
});
