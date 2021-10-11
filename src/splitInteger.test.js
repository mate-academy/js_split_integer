'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger(8, 1)).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(10, 1)).toEqual([10]);
  });

  // write more tests here
  it(`should return [4, 4] with num = 8 if parts = 2`, () => {
    expect(splitInteger(8, 2)).toEqual([4, 4]);
  });

  it(`should return array with 4 elements if parts = 4`, () => {
    expect(splitInteger(17, 4)).toHaveLength(4);
  });

  it(`should return [5, 5, 5, 5, 5, 5] with num = 32 if parts = 6`, () => {
    expect(splitInteger(30, 6)).toEqual([5, 5, 5, 5, 5, 5]);
  });

  it(`should return [5, 6, 6, 6, 6, 6] with num = 35 if parts = 6`, () => {
    expect(splitInteger(35, 6)).toEqual([5, 6, 6, 6, 6, 6]);
  });

  it(`should return [5, 5, 5, 5, 5, 6] with num = 31 if parts = 6`, () => {
    expect(splitInteger(31, 6)).toEqual([5, 5, 5, 5, 5, 6]);
  });
});
