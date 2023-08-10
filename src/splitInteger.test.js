'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
    expect(splitInteger(10, 2)).toEqual([5, 5]);
    expect(splitInteger(15, 3)).toEqual([5, 5, 5]);
    expect(splitInteger(20, 4)).toEqual([5, 5, 5, 5]);
    expect(splitInteger(25, 5)).toEqual([5, 5, 5, 5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
    expect(splitInteger(10, 1)).toEqual([10]);
    expect(splitInteger(15, 1)).toEqual([15]);
    expect(splitInteger(20, 1)).toEqual([20]);
    expect(splitInteger(25, 1)).toEqual([25]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  expect(splitInteger(15, 4)).toEqual([3, 4, 4, 4]);
  expect(splitInteger(20, 5)).toEqual([4, 4, 4, 4, 4]);
  expect(splitInteger(25, 6)).toEqual([4, 4, 4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1 ]);
  expect(splitInteger(5, 8)).toEqual([0, 0, 0, 1, 1, 1, 1, 1]);
  expect(splitInteger(10, 12)).toEqual([0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
});
