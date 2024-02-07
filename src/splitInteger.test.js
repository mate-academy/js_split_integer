'use strict';

const splitInteger = require('./splitInteger');

it(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(2, 2)).toEqual([1, 1]);
});

it(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(17, 4)).toHaveLength(4);
});

it('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

it('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(17, 0)).toEqual([]);
});
