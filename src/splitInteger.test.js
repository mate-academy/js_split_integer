'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(17, 5)).toEqual([3, 3, 3, 4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(17, 1)).toEqual([17]);
});

test('should sort parts ascending if they are not equal', () => {
  // eslint-disable-next-line max-len
  expect(splitInteger(17, 4)).toEqual([...splitInteger(17, 4)].sort((a, b) => a - b));
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 5)).toEqual([0, 0, 0, 1, 1]);
});
