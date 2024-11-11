'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const res = splitInteger(17, 4);

  expect(res).toEqual([4, 4, 4, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const res = splitInteger(10, 1);

  expect(res).toEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  const res = splitInteger(1, 2);

  expect(res[0] < res[1]).toBeTruthy();
});

test('should add zeros if value < numberOfParts', () => {
  const res = splitInteger(1, 2);

  expect(res[0]).toBe(0);
});
