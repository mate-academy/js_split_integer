'use strict';

const splitInteger = require('./splitInteger.js');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const value = [8, 8, 8, 8, 8, 8, 8, 8]
  const recived = splitInteger(64, 8);

  expect(value).toEqual(recived);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = [9];
  const recived = splitInteger(9, 1);

  expect(value).toEqual(recived);
});

test('should sort parts ascending if they are not equal', () => {
  const value = [5, 6, 6, 6];
  const recived = splitInteger(23, 4);

  expect(value).toEqual(recived);
});

test('should add zeros if value < numberOfParts', () => {
  const value = [0];
  const recived = splitInteger(3, 4);

  expect(value).toEqual(recived);
});
