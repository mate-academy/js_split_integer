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

  it(`should return object`, () => {
    expect(typeof splitInteger('input')).toEqual('object');
  });

  it(`should return array length`, () => {
    expect(splitInteger(10, 5)).toHaveLength(5);
  });

  it(`should return 0 if divided by a number`, () => {
    expect(splitInteger(21, 8)).toEqual([2, 2, 2, 3, 3, 3, 3, 3]);
  });

  it(`should return 0 if divided by a number`, () => {
    expect(splitInteger(519, 4)).toEqual([129, 130, 130, 130]);
  });

  it(`should return 0 if divided by a number`, () => {
    expect(splitInteger(63, 5)).toEqual([12, 12, 13, 13, 13]);
  });
});
