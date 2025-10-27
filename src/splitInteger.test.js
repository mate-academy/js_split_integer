'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const actual = splitInteger(6, 2);
  const expected = [3, 3];

  expect(actual).toEqual(expected);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const actual = splitInteger(8, 1);
  const expected = [8];

  expect(actual).toEqual(expected);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const actual = splitInteger(2, 3);
  const expected = [0, 1, 1];

  expect(actual).toEqual(expected);
  expect(actual).toContain(0);
});
