'use strict';

const splitInteger = require('./splitInteger');

it(`should be declared`, () => {
  expect(splitInteger)
    .toBeInstanceOf(Function);
});

it(`should return an array`, () => {
  expect(splitInteger(3, 1))
    .toBeInstanceOf(Array);
});

it(`should split a number into equal parts
 if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 2))
    .toEqual([4, 4]);
});

it(`should return a part equals to a value when splitting into 1 part`, () => {
  expect(splitInteger(7, 1))
    .toEqual([7]);
});

it(`should sort parts ascending if they are not equal`, () => {
  expect(splitInteger(10, 4))
    .toEqual([2, 2, 3, 3]);
});

it(`should add zeros if value < numberOfParts`, () => {
  expect(splitInteger(4, 5))
    .toEqual([0, 1, 1, 1, 1]);
});
