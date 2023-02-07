'use strict';

const { splitInteger } = require('./splitInteger.js');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const funcResult = splitInteger(6, 2);

  expect(funcResult).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const funcResult = splitInteger(8, 1);

  expect(funcResult).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const funcResult = splitInteger(17, 4);

  expect(funcResult).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const funcResult = splitInteger(3, 4);

  expect(funcResult).toEqual([0, 1, 1, 1]);
});
