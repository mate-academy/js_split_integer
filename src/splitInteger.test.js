'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const value = 12;
  const numberOfParts = 4;
  const expected = [3, 3, 3, 3];

  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual(expected);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 10;
  const numberOfParts = 1;
  const expected = [10];

  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual(expected);
});

test('should sort parts ascending if they are not equal', () => {
  const value = 13;
  const numberOfParts = 2;
  const expected = [6,7];

  const result = splitInteger(value, numberOfParts);

  expect(result).toEqual(expected);
});

test('should add zeros if value < numberOfParts', () => {

});
