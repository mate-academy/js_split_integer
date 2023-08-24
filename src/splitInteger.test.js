'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
    const divisible = splitInteger(10, 2)
    expect(divisible).toEqual([5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
    const part = splitInteger(10, 1)
    expect(part).toEqual([10])
});

test('should sort parts ascending if they are not equal', () => {
  const parts = splitInteger(7, 2);
  expect(parts).toEqual([3, 4]); 
});

test('should add zeros if value < numberOfParts', () => {
  const zeros = splitInteger(1, 3)
  expect(zeros).toEqual[0, 0, 1]
});
