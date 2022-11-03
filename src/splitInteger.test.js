'use strict';

const splitInteger = require('./splitInteger');

test(`sh-d split number into equal parts if value is div`, () => {
  expect(splitInteger(20, 2)).toEqual([10, 10]);
});

test(`should return a part equals to a value when split into 1 part`, () => {
  expect(splitInteger(100, 1)).toEqual([100]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(5, 2)).toEqual([2, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 2)).toEqual([0, 1]);
});
