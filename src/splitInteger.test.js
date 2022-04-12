'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
 if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(6, 3);

  expect(parts).toEqual([2, 2, 2]);
});

test(`should return a part equals to 
a value when splitting into 1 part`, () => {
  const parts = splitInteger(3, 1);

  expect(parts).toEqual([3]);
});

test('should sort parts ascending if they are not equal', () => {
  const parts = splitInteger(13, 3);

  expect(parts).toEqual([4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const parts = splitInteger(2, 5);

  expect(parts).toEqual([0, 0, 0, 1, 1]);
});
