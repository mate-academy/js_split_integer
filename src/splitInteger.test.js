'use strict';

const splitInteger = require('./splitInteger');

// should split a number into equal parts if a value is divisible by a number
test(`should split a number into equal parts`, () => {
  expect(splitInteger(6, 3))
    .toEqual([2, 2, 2]);
});

// should return a part equals to a value when splitting into 1 part
test(`should return a part equals to a value`, () => {
  expect(splitInteger(8, 1))
    .toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 4))
    .toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 3))
    .toEqual([0, 1, 1]);
});
