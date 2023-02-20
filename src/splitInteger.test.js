'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const value = 100;
  const numberOfParts = 5;
  const arr = splitInteger(value, numberOfParts);

  const actual = arr.every(item => item === 100 / 5);
  const expected = true;

  expect(actual)
    .toBe(expected);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 100;
  const numberOfParts = 1;
  const arr = splitInteger(value, numberOfParts);

  const onlyOneElement = arr.length === 1;
  const isFirstElementEqualValue = arr[0] === 100;

  const actual = onlyOneElement && isFirstElementEqualValue;
  const expected = true;

  expect(actual)
    .toBe(expected);
});

test('should sort parts ascending if they are not equal', () => {
  const actual = splitInteger(22, 5)
    .map((_, i, arr) => {
      if (i === 0) {
        return 0;
      }

      return arr[i] - arr[i - 1];
    })
    .every(e => e >= 0);
  const expected = true;

  expect(actual)
    .toBe(expected);
});

test('should add zeros if value < numberOfParts', () => {
  const value = 5;
  const numberOfParts = 7;
  const arr = splitInteger(value, numberOfParts);

  const actual = arr.findIndex(item => item > 0) > 0;
  const expected = true;

  expect(actual)
    .toBe(expected);
});
