'use strict';

const splitInteger = require('./splitInteger');

it(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 2)).toEqual([4, 4]);
});

it(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(10, 1)).toEqual([10]);
});

it(`should sort parts ascending if they are not equal`, () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});

it(`should add zeros if value < numberOfParts`, () => {
  expect(splitInteger(3, 5)).toEqual([0, 0, 0, 1, 2]);
});
