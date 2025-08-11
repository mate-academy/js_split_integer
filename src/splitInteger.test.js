'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
    const result = splitInteger(8, 4);

    expect(result.every(i => 2)).toBeTruthy();
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
    const result = splitInteger(9, 1);

    expect(result).toEqual([9]);
});

test('should sort parts ascending if they are not equal', () => {
    const result = splitInteger(17, 2);
    const expectedResult = [8, 9];

    expect(result).toEqual(expectedResult);
});

test('should add zeros if value < numberOfParts', () => {
    const result = splitInteger(2, 5);
    const expectedResult = [0, 0, 0, 1, 1];

    expect(result).toEqual(expectedResult);
});
