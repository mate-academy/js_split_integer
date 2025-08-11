'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
    const result = splitInteger(6, 2);
    expect(result).toEqual([3, 3]);
    });

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
    const result = splitInteger(6, 1);
    expect(result[0]).toEqual(6);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(7, 3);
  expect(result).toEqual([2, 2, 3]);
  });

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(1, 2);
  expect(result[0]).toEqual(0);
  });
