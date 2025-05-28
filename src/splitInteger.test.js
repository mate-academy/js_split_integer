'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  return expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  return expect(splitInteger(8, 1)).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  return expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 5);

  expect(result.length).toBe(5);
  expect(result.filter(n => n === 0).length).toBeGreaterThan(0);
});
