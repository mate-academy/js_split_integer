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

  it(`should return empty array when inputs is empty`, () => {
    expect(splitInteger()).toEqual([]);
  });

  it(`should return [0] when inputs is 0`, () => {
    expect(splitInteger(0, 0)).toEqual([]);
  });
});
