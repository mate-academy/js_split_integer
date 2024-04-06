'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const resultArr = splitInteger(10, 2);

  expect(resultArr).toEqual([5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const resultArr = splitInteger(10, 1);

  expect(resultArr).toEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  const resultArr = splitInteger(53, 5);

  expect(resultArr).toEqual([10, 10, 11, 11, 11]);
});

test('should add zeros if value < numberOfParts', () => {
  const resultArr = splitInteger(5, 7);

  expect(resultArr).toEqual([0, 0, 1, 1, 1, 1, 1]);
});
