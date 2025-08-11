'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
    const expectedValue = [ 5, 5, 5, 5 ]
    expect(splitInteger(20,4)).toEqual(expectedValue)
  });

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
    const expectedValue = [ 20 ]
    expect(splitInteger(20, 1)).toEqual(expectedValue)
});

test('should sort parts ascending if they are not equal', () => {
  const expectedValue = [ 5, 5, 6, 6 ]
  expect(splitInteger(22, 4)).toEqual(expectedValue)
});

test('should add zeros if value < numberOfParts', () => {
  const expectedValue = [ 0, 0, 0, 0, 0, 1 ]
  expect(splitInteger(1, 6)).toEqual(expectedValue)
});
