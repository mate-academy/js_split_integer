'use strict';

const splitInteger = require('./splitInteger');

it(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(8, 1);

  expect(result).toEqual([8]);
});

it(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(6, 1);

  expect(result).toEqual([6]);
});

it('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);

  expect(result).toEqual([4, 4, 4, 5]);
});

it('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(32, 6);

  expect(result).toEqual([5, 5, 5, 5, 6, 6]);
});
