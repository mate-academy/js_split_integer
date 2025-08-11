'use strict';

const splitInteger = require('./splitInteger');

test(
  `should split number into equal parts
  if a value is divisible by a numberOfParts`,
  () => {
    expect(splitInteger(10, 2)).toEqual([5, 5]);
    expect(splitInteger(9, 3)).toEqual([3, 3, 3]);
    expect(splitInteger(12, 4)).toEqual([3, 3, 3, 3]);
  }
);

test(
  `should return a part equal to the value
  when splitting into 1 part`,
  () => {
    expect(splitInteger(10, 1)).toEqual([10]);
    expect(splitInteger(5, 1)).toEqual([5]);
    expect(splitInteger(0, 1)).toEqual([0]);
  }
);

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 4)).toEqual([0, 0, 1, 1]);
  expect(splitInteger(0, 3)).toEqual([0, 0, 0]);
});
