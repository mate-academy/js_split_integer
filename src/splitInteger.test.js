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

  it(`should return array with parts of num as close as possible`, () => {
    expect(splitInteger(5, 2)).toEqual([2, 3]);
  });

  it(`should return array of integers in the ascending order`, () => {
    expect(splitInteger(5, 2)).toEqual([2, 3]);
  });
});
