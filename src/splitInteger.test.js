'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const number = 20;
  const partsOfArray = 2;

  const result = splitInteger(number, partsOfArray);

  expect(result.length).toBe(partsOfArray);
  expect(result.every((val) => val === number / partsOfArray)).toBe(true);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const number = 10;
  const partsOfArray = 1;

  const result = splitInteger(number, partsOfArray);

  expect(result).toEqual([number]);
});

test('should sort parts ascending if they are not equal', () => {
  const number = 5;
  const partsOfArray = 2;

  const result = splitInteger(number, partsOfArray);

  expect(result).toEqual([...result].sort((a, b) => a - b));
});

test('should add zeros if value < numberOfParts', () => {
  const number = 4;
  const partsOfArray = 5;

  const result = splitInteger(number, partsOfArray);
  const zerosCount = result.filter((item) => item === 0).length;

  expect(result.length).toBe(partsOfArray);
  expect(zerosCount).toEqual(partsOfArray - number);
});
