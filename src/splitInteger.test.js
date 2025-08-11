'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const res = splitInteger(32, 6);

  expect(res).toEqual([5, 5, 5, 5, 6, 6]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const res = splitInteger(14, 1);

  expect(res).toEqual([14]);
});

test('should sort parts ascending if they are not equal', () => {
  const res = splitInteger(1, 2);

  expect(res[0] < res[1]).toBeTruthy();
});

test('should add zeros if value < numberOfParts', () => {
  const res = splitInteger(1, 2);

  expect(res[0]).toBe(0);
});
