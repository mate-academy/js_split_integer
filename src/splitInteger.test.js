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
    expect(splitInteger(10, 1)).toEqual([10]);
  });

  it(`should return [4,4,4,5]  if num = 17 and parts = 4`, () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  it(`should return [5,5,5,5,6,6]  if num = 32 and parts = 6`, () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  it(`should return [3,3]  if num = 6 and parts = 2`, () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
  });
});
