'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const actual = splitInteger(8, 2);

  expect(actual).toEqual([4, 4]);
});

test(`amount of parts should be equaled amount of value`, () => {
  const actual = splitInteger(17, 4);

  const sum = actual.reduce((acc, val) => acc + val, 0);

  expect(sum).toEqual(17);
});

test(`Difference between the biggest and the smallest number in the array
   should be equal or less than one`, () => {
  const actual = splitInteger(17, 4);
  const isLessOrEqualOne = Math.max(...actual) - Math.min(...actual) <= 1;

  expect(isLessOrEqualOne).toBe(true);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const actual = splitInteger(6, 1);

  expect(actual).toEqual([6]);
});

test('should sort parts ascending if they are not equal', () => {
  const actual = splitInteger(17, 4);

  expect(actual.every((value, i, a) => i === 0 || a[i - 1] <= value)).toBe(
    true
  );
});

test('should add zeros if value < numberOfParts', () => {
  const actual = splitInteger(1, 5);

  expect(actual).toEqual([0, 0, 0, 0, 1]);
});
