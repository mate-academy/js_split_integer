'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(typeof splitInteger()).toEqual(expect.arrayContaining(
      splitInteger()));
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(10, 1)).toEqual([10]);
  });

  it(`should return an array with [3, 3] if splitInteger(6, 2)`, () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
  });

  it(`should return an array with splitted num into 5 integers if parts = 5`,
    () => {
      expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
    });

  it(`parts of the num should be as close as possible`, () => {
    expect(splitInteger(11, 5)).toEqual([2, 2, 2, 2, 3]);
  });

  it(`should return the result array in the ascending order`, () => {
    expect(splitInteger(18, 4)).toEqual([4, 4, 5, 5]);
  });

  it(`should return an array with [-5, -5, -5, -5, -5, -5] 
  if splitInteger(-18, 4)`, () => {
    expect(splitInteger(-18, 4)).toEqual([-5, -5, -5, -5, -5, -5]);
  });
});
