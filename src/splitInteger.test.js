/* eslint-disable no-console */
'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(5, 3);
  const expected = [1, 2, 2];

  expect(result)
    .toStrictEqual(expected);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(5, 1);
  const expected = [5];

  expect(result)
    .toStrictEqual(expected);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(5, 3);
  const expected = [1, 2, 2];

  expect(result)
    .toStrictEqual(expected);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(2, 3);
  const expected = [0, 1, 1];

  expect(result)
    .toStrictEqual(expected);
});
