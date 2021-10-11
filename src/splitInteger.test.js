'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should accept positive integers`, () => {
    expect(splitInteger(10, 5)).toBeTruthy();
  });

  it(`should return an array`, () => {
    expect(splitInteger()).toBeInstanceOf(Array);
  });

  it(`should return an array length of equal the part`, () => {
    expect(splitInteger(10, 2)).toEqual([5, 5]);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  it(`should return an array with 'num' if parts = 2`, () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
  });

  it(`should return an array in ascending order`, () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  it(`should return an integer array`, () => {
    expect(splitInteger(2, 1)).toEqual([2]);
  });
});
