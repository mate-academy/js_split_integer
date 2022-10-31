'use strict';
const { splitInteger } = require('./splitInteger');

it(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
    expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2])
});

it(`should return a part equals to a value when splitting into 1 part`, () => {
    expect(splitInteger(10, 1)).toEqual([10])
});

it('should sort parts ascending if they are not equal', () => {
    expect(splitInteger(13, 4)).toEqual([3, 3, 3, 4])
});

it('should add zeros if value < numberOfParts', () => {
    expect(splitInteger(2, 5)).toStrictEqual([0, 0, 0, 1, 1])
});

it('should return empty array if one of the numbers is missing', () => {
    expect(splitInteger(2)).toStrictEqual([])
});

it('should return empty array if the inputs are negative', () => {
    expect(splitInteger(-2, -3)).toStrictEqual([])
});
