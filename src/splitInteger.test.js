'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(17, 4))
    .toHaveLength(4);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1))
    .toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(32, 6);

  expect(result)
    .toBe(result.sort());
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(4, 8))
    .toEqual([0, 0, 0, 0, 1, 1, 1, 1]);
});
