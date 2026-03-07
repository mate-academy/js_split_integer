'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const actual = splitInteger(6, 2);
  expect(actual).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const actual = splitInteger(8, 1);
  expect(actual).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const actual = splitInteger(17, 4);
  expect(actual).toEqual([4, 4, 4, 5]);
});

test('should sort parts ascending if they are not equal', () => {
  const actual = splitInteger(32, 6);
  expect(actual).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const actual = splitInteger(2, 3);
  expect(actual).toEqual([0, 1, 1]);
});
