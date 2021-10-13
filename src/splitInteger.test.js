'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger(3, 3)).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(2, 1)).toEqual([2]);
  });

  // write more tests here

  it(`should return [4] when inputs is 8, 2`, () => {
    expect(splitInteger(8, 2)).toEqual([4, 4]);
  });

  it(`should return [2] when inputs is 20, 10`, () => {
    expect(splitInteger(20, 10)).toEqual([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
  });

  it(`should return [3, 4] when inputs is 7, 2`, () => {
    expect(splitInteger(7, 2)).toEqual([3, 4]);
  });

  it(`should return [4] when inputs is 8, 2`, () => {
    expect(splitInteger(8, 2)).toEqual([4, 4]);
  });
});
