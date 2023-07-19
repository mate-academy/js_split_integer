'use strict';

const splitInteger = require('./splitInteger');

it(`should split a number into equal parts if a value'
+ 'is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

it(`should return a part equals to a value when splitting'
+ 'into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

it('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

it('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 2)).toEqual([0, 1]);
});
