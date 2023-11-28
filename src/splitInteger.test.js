'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(9, 3)).toEqual([3, 3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result1 = splitInteger(5, 1);

  expect(result1).toEqual([5]);

  const result2 = splitInteger(10, 1);

  expect(result2).toEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  const result1 = splitInteger(8, 1);

  expect(result1).toEqual([8]);

  const result2 = splitInteger(6, 2);

  expect(result2).toEqual([3, 3]);

  const result3 = splitInteger(17, 4);

  expect(result3).toEqual([4, 4, 4, 5]);

  const result4 = splitInteger(32, 6);

  expect(result4).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const result1 = splitInteger(3, 5);

  expect(result1).toEqual([0, 0, 1, 1, 1]);

  const result2 = splitInteger(8, 10);

  expect(result2).toEqual([ +0, +0, 1, 1, 1, 1, 1, 1, 1, 1 ]);
});
