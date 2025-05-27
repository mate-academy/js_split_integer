'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {

});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {

});

test('should sort parts ascending if they are not equal', () => {

});

test('should add zeros if value < numberOfParts', () => {

});

test(`should split a number into equal parts  
  if value is divisible by numberOfParts`, () => {
  const result = splitInteger(10, 5);

  expect(result).toEqual([2, 2, 2, 2, 2]);
});

test('should return a part equals to value when splitting into 1 part', () => {
  const result = splitInteger(7, 1);

  expect(result).toEqual([7]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(10, 3);

  // 10 / 3 = 3.33..., so expected parts: [3, 3, 4] or similar
  expect(result).toEqual([3, 3, 4]);
  expect([...result].sort((a, b) => a - b)).toEqual(result);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(2, 5);

  // 2 parts of 1, rest are zeros — order doesn't matter
  const expected = [0, 0, 0, 1, 1];

  expect([...result].sort((a, b) => a - b)).toEqual(expected);
  expect(result.reduce((a, b) => a + b, 0)).toBe(2);
});
