'use strict';

const splitInteger = require('./splitInteger');

const getMaxValue = (result) => Math.max(...result);

const getMinValue = (result) => Math.min(...result);

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(6, 2);

  expect(getMaxValue(result) === getMinValue(result)).toBe(true);
  expect(result).toStrictEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);

  expect(getMaxValue(result) === getMinValue(result)).toBe(true);
  expect(result).toStrictEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);
  const expectResult = [4, 4, 4, 5];

  expect(getMaxValue(result) - getMinValue(result) === 1).toBe(true);
  expect(result).toStrictEqual(expectResult.sort());
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(4, 6);

  expect(getMaxValue(result) - getMinValue(result) === 1).toBe(true);
  expect(result).toStrictEqual([0, 0, 1, 1, 1, 1]);
});
