'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const splitted = splitInteger(6, 2);

  expect(splitted).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const splitted = splitInteger(8, 1);

  expect(splitted).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const splitted = splitInteger(17, 4);

  expect(splitted).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const splitted = splitInteger(2, 4);

  expect(splitted).toEqual([0, 0, 1, 1]);
});
