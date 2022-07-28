'use strict';

const splitInteger = require('./splitInteger');

// eslint-disable-next-line max-len
test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(8, 2);

  expect(result).toEqual([4, 4]);
});

// eslint-disable-next-line max-len
test(`should return a part equals to a value when splitting into 1 part`, () => {
  const result = splitInteger(10, 1);

  expect(result).toEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(32, 6);
  const sortedResult = [...result].sort((a, b) => a - b);

  expect(result).toEqual(sortedResult);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(1, 3);

  expect(result).toEqual([0, 0, 1]);
});
