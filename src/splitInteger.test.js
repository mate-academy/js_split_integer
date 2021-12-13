'use strict';
const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
const value = 12;
const numberOfParts = 3;
    
expect(splitInteger(value, numberOfParts)).toEqual([4, 4, 4]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
const value = 5;
const numberOfParts = 1;

expect(splitInteger(value, numberOfParts)).toEqual([value]);
});

test('should sort parts ascending if they are not equal', () => {
const value = 20;
const numberOfParts = 3;

expect(splitInteger(value, numberOfParts)).toEqual([6, 7, 7]);
});

test('should add zeros if value < numberOfParts', () => {
const value = 3;
const numberOfParts = 4;

expect(splitInteger(value, numberOfParts)).toEqual([0, 1, 1, 1]);
});
