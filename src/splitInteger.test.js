/* eslint-disable max-len */
'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  const expects = splitInteger(6, 3);

  expect(expects)
    .toEqual([2, 2, 2]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  const expects = splitInteger(6, 1);

  expect(expects)
    .toEqual([6]);
});

test('should sort parts ascending if they are not equal', () => {
  const expects = splitInteger(22, 4);

  expect(expects)
    .toEqual([5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const expects = splitInteger(5, 6);

  expect(expects)
    .toEqual([0, 1, 1, 1, 1, 1]);
});
