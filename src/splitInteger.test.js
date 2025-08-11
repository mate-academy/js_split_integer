'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
   if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(36, 6);

  for (let i = 1; i < result.length; i++) {
    expect(result[i]).toBe(result[i - 1]);
  };
});

test(`should return a part equals to a value
   when splitting into 1 part`, () => {
  const result = splitInteger(6, 1);

  expect(result).toHaveLength(1);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(39, 6);

  expect(result).toEqual([ ...result ].sort((arg1, arg2) => {
    return arg1 - arg2;
  }));
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(6, 7);

  for (let i = 1; i < result.length; i++) {
    if (result[i] !== 1) {
      expect(result[i]).toBe(0);
    }
  };
});
