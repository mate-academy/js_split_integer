'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toHaveLength(2);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toStrictEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 5);

  expect(result).toStrictEqual(result.sort((a, b) => a >= b));
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 2)).toContain(0);
});
