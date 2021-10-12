'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger()).toBeInstanceOf(Array);
  });

  it(`should return an array with length equal to 'parts'`, () => {
    expect(splitInteger(10, 2)).toEqual([5, 5]);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  it(`should return integers as close to each other as possible`, () => {
    expect(splitInteger(8, 3)).toEqual([2, 3, 3]);
  });

  it(`should return an array in ascending order`, () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });
});
