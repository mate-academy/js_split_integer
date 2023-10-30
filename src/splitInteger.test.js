'use strict';

const splitInteger = require('./splitInteger');

describe('split module', () => {
  test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
    expect(splitInteger(10, 2)).toStrictEqual([5, 5]);
  });

  test(`should return a part equals to a value
  when splitting into 1 part`, () => {
    expect(splitInteger(3, 1)).toStrictEqual([3]);
  });

  test(`should sort parts ascending if they are not equal`, () => {
    expect(splitInteger(17, 4)).toStrictEqual([4, 4, 4, 5]);
  });

  test(`should add zeros if value < numberOfParts`, () => {
    expect(splitInteger(1, 2)).toStrictEqual([0, 1]);
  });
});
