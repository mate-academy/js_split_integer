'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger(10, 3)).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  it(`should return min difference between 'num'`, () => {
    expect(splitInteger(8, 3)).toEqual([2, 3, 3]);
  });

  it(`should return array in ascending order`, () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  it(`should return array [5, 5, 5, 5, 6, 6] 
  with num = 32 if parts = 6`, () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  it(`should return array [3, 3] with num = 6 if parts = 2`, () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
  });
});
