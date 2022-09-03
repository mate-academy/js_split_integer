'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value
  is divisible by a numberOfParts`, () => {
  const parts = splitInteger(16, 4);

  expect(parts).toEqual([4, 4, 4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const parts = splitInteger(16, 1);

  expect(parts).toEqual([16]);
});

test('should sort parts ascending if they are not equal', () => {
  const parts = splitInteger(17, 4);

  expect(parts).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const parts = splitInteger(4, 5);

  expect(parts).toEqual([0, 1, 1, 1, 1]);
});
