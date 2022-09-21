'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a 
numberOfParts`, () => {
  const parts = splitInteger(15, 3);

  expect(parts).toEqual([5, 5, 5]);
});

test(`should return a part equals to a value when splitting into 1 part`,
  () => {
    const parts = splitInteger(9, 1);

    expect(parts).toEqual([9]);
  });

test('should sort parts ascending if they are not equal', () => {
  const parts = splitInteger(22, 4);

  expect(parts).toEqual([5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const parts = splitInteger(5, 7);

  expect(parts).toEqual([0, 0, 1, 1, 1, 1, 1]);
});
