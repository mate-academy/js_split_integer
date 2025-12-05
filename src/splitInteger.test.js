'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {

  const result = splitInteger(20, 4);

  expect(result).toEqual([5, 5, 5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {

  const result = splitInteger(15, 1);

  expect(result).toEqual([15]);
});

test('should sort parts ascending if they are not equal', () => {

  const result = splitInteger(10, 3);

  expect(result).toEqual([3, 3, 4]);
  expect(result).toEqual(result.slice().sort((a, b) => a - b));
});


test('should add zeros if value < numberOfParts', () => {

  const result = splitInteger(3, 5);

  expect(result).toEqual([0, 0, 1, 1, 1]);
});
