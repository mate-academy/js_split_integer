'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  const res = splitInteger(8, 4);

  expect(res).toEqual([2, 2, 2, 2]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  const res = splitInteger(3, 1);

  expect(res).toEqual([3]);
});

test('should sort parts ascending if they are not equal', () => {
  const res = splitInteger(45, 4);

  expect(res).toEqual([11, 11, 11, 12]);
});

test('should add zeros if value < numberOfParts', () => {
  const res = splitInteger(0, 3);

  expect(res).toEqual([0, 0, 0]);
});
