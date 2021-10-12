'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger()).toEqual([]);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  it(`should return an array of parts`, () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  it(`should return 0 if num = 0`, () => {
    expect(splitInteger(0, 2)).toEqual([0, 0]);
  });

  it(`should return empty array if parts = 0`, () => {
    expect(splitInteger(4, 0)).toEqual([]);
  });
  // write more tests here
});
