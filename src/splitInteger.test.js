'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const value = splitInteger(10, 5);

  expect(value).toEqual([2, 2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = splitInteger(8, 1);

  expect(value).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const value = splitInteger(8, 3);

  expect(value).toEqual([2, 3, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  const value = splitInteger(3, 5);

  expect(value).toEqual([0, 0, 1, 1, 1]);
});
