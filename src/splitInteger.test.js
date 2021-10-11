'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger([1, 1])).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(1, 1)).toEqual([1]);
  });

  it(`should return an array in the ascending order`, () => {
    expect(splitInteger(18, 5)).toEqual([3, 3, 4, 4, 4]);
  });

  it(`the number of elements should be equal to the parts`, () => {
    expect(splitInteger(8, 4)).toEqual([2, 2, 2, 2]);
  });
});
