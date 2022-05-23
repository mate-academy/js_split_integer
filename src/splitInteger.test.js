'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a values`, () => {
  expect(splitInteger(6, 2))
    .toEqual([3, 3]);
});

test(`should return a part equals to a value when splt`, () => {
  expect(splitInteger(8, 1))
    .toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(16, 5))
    .toEqual([3, 3, 3, 3, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 2))
    .toEqual([0, 1]);
});
