'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(100, 4);

  expect(result).toEqual([25, 25, 25, 25]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(100, 1);

  expect(result).toEqual([100]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(99, 4);

  expect(result).toEqual([24, 25, 25, 25]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 100);
  const equalResult = [];
  const equalValue = 3;
  const equalNumberOfParts = 100;

  for (let i = 0; i < equalNumberOfParts - equalValue; i++) {
    equalResult.push(0);
  }

  for (let i = 0; i < equalValue; i++) {
    equalResult.push(1);
  }

  expect(result).toEqual(equalResult);
});
