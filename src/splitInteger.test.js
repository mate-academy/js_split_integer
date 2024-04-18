'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(8, 2);

  expect(result[0]).toEqual(result[result.length - 1]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 6;
  const result = splitInteger(value, 1);

  expect(result[0]).toEqual(value);
  expect(result.length).toEqual(1);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(10, 3);

  expect(result).toEqual([3, 3, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(1, 2);

  expect(result).toContain(0);
});
