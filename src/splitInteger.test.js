'use strict';

const splitInteger = require('./splitInteger');

it(`should split a number into equal parts if a value
 is divisible by a numberOfParts`, () => {
  expect(splitInteger(16, 4))
    .toEqual([4, 4, 4, 4]);
});

test(`should return a part equals to a value 
when splitting into 1 part`, () => {
  expect(splitInteger(10, 1))
    .toEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 4))
    .toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 3))
    .toEqual([0, 1, 1]);
});
