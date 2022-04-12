'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts 
if a value is divisible by a numberOfParts`, () => {
  const nParts = splitInteger(8, 2);

  expect(nParts).toEqual([4, 4]);
});

test(`should return a part equals to a value 
when splitting into 1 part`, () => {
  const nParts = splitInteger(8, 1);

  expect(nParts).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const nParts = splitInteger(8, 3);

  expect(nParts).toEqual([2, 3, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  const nParts = splitInteger(1, 3);

  expect(nParts).toEqual([0, 0, 1]);
});
