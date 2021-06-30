'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an integer array`, () => {
    expect(splitInteger()).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(5, 1)).toEqual([5]);
  });

  it(`should return an array [3, 3] if num = 6, parts = 2`, () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
  });

  it(`should return an array [4, 4, 4, 5] if num = 17, parts = 4`, () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  it(`should return an array in ascending order`, () => {
    expect(splitInteger(58, 8)).toEqual([7, 7, 7, 7, 7, 7, 8, 8]);
  });
});
