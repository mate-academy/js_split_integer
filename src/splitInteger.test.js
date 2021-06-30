'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger()).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(5, 1)).toEqual([5]);
  });

  it(`should return an array: [5, 5, 5, 5, 6] if number = 26`, () => {
    expect(splitInteger(26, 5)).toEqual([5, 5, 5, 5, 6]);
  });

  it(`should return an array in ascending order`, () => {
    expect(splitInteger(26, 5)).toEqual([5, 5, 5, 5, 6]);
  });
});
