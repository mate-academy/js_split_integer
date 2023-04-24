'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const fun = splitInteger(17, 4);

  expect(fun)
    .toEqual([4, 4, 4, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const fun = splitInteger(5, 1);

  expect(fun)
    .toEqual([5]);
});

test('should sort parts ascending if they are not equal', () => {
  const fun = splitInteger(89, 3);

  expect(fun)
    .toEqual([29, 30, 30]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 2))
    .toEqual([0, 1]);
});
