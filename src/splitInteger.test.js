'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const res = splitInteger(8, 2);

  expect(res).toEqual([4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const res = splitInteger(6, 1);

  expect(res).toEqual([6]);
});

test('should sort parts ascending if they are not equal', () => {
  const res = splitInteger(17, 4);

  expect(res).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const res = splitInteger(4, 5);

  expect(res).toEqual([0, 1, 1, 1, 1]);
});
