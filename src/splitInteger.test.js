'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 2)).toHaveLength(2);
});

test(`should returns a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(500, 1)[0]).toEqual(500);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(201, 5)).toEqual([40, 40, 40, 40, 41]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(5, 10)).toEqual([0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
});
