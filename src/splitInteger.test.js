/* eslint-disable prettier/prettier */
'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const res = splitInteger(4, 2);

  expect(res).toEqual([2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const res = splitInteger(8, 1);

  expect(res).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const res = splitInteger(8, 3);

  expect(res).toEqual([...res].sort((a, b) => a - b));
});

test('should add zeros if value < numberOfParts', () => {
  const res = splitInteger(4, 8);

  expect(res).toEqual([0, 0, 0, 0, 1, 1, 1, 1]);
});
