'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if value is divisible
  by numberOfParts`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test(`should return a part equal to value when splitting into 1 part`, () => {
  expect(splitInteger(5, 1)).toEqual([5]);
});

test(`should sort parts ascending if they are not equal`, () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
});
