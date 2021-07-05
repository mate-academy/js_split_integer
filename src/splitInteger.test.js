'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger([]).constructor.name).toEqual('Array');
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(1, 1)).toEqual([1]);
  });

  it(`should return [2, 2, 2, 3, 3, 3, 3, 3] if num = 21, parts = 8`, () => {
    expect(splitInteger(21, 8)).toEqual([2, 2, 2, 3, 3, 3, 3, 3]);
  });

  it(`should return [129, 130, 130, 130] if num = 519, parts = 4`, () => {
    expect(splitInteger(519, 4)).toEqual([129, 130, 130, 130]);
  });

  it(`should return [12, 12, 13, 13, 13] if num = 63, parts = 5`, () => {
    expect(splitInteger(63, 5)).toEqual([12, 12, 13, 13, 13]);
  });
});
