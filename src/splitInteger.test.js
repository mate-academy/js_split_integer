'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(4,2)).toEqual([2,2])
  });

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 4;
  const part = 1;

  const result = splitInteger(value, part);

  let sum = 0;

  for (let i = 0; i < result.length; i++) {
    sum += result[i];
  }

  expect(result.length).toBe(part);
  expect(sum).toBe(value);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(5,4)).toEqual([1,1,1,2])
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1,4)).toEqual([0,0,0,1])
});
