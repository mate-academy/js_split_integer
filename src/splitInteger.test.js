'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const splittedInteger = splitInteger(6, 2);

  expect(splittedInteger).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const splittedInteger = splitInteger(8, 1);

  expect(splittedInteger).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const splittedInteger = splitInteger(17, 4);

  expect(splittedInteger).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const splittedInteger = splitInteger(2, 5);

  expect(splittedInteger).toEqual([0, 0, 0, 1, 1]);
});
