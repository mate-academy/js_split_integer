'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
    expect(splitInteger(8, 1)).toEqual([8]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);
  expect(result).toEqual(result.slice().sort((a, b) => a - b));
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(2, 5);
  expect(result).toEqual([0, 0, 0, 1, 1]);
});
