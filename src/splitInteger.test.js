'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(4, 2);

  expect(result).toEqual([2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(5, 1)).toEqual([5]);
});

test(`should sort parts ascending if they are not equal`, () => {
  const result = splitInteger(5, 2);
  const isSorted = result.at(-1) >= result.at(-2);

  expect(isSorted).toBeTruthy();
});

test(`should add zeros if value < numberOfParts`, () => {
  expect(splitInteger(2, 3)).toEqual([0, 1, 1]);
});
