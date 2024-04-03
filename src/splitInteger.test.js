'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const number = 40;
  const partsOfArray = 5;

  const result = splitInteger(number, partsOfArray);

  expect(result.length).toBe(partsOfArray);
  expect(result.every(val => val === number / partsOfArray)).toBe(true);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const number = 32;
  const partsOfArray = 1;

  const result = splitInteger(number, partsOfArray);

  expect(result).toEqual([number]);
});

test('should sort parts ascending if they are not equal', () => {
  const number = 47;
  const partsOfArray = 3;

  const result = splitInteger(number, partsOfArray);

  expect(result).toEqual([...result].sort((a, b) => a - b));
});

test('should add zeros if value < numberOfParts', () => {
  const number = 8;
  const partsOfArray = 10;

  const result = splitInteger(number, partsOfArray);
  const numberOfZeros = result.filter(zeros => zeros === 0).length;

  expect(result.length).toBe(partsOfArray);
  expect(numberOfZeros).toEqual(partsOfArray - number);
});
