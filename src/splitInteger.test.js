'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger(5, 1)).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(5, 1)).toEqual([5]);
  });

  it(`should return empty array when'num' if parts = 0`, () => {
    expect(splitInteger(5, 0)).toEqual([]);
  });

  it(`should return an array when 'num' if parts = 5`, () => {
    expect(splitInteger(5, 5)).toEqual([1, 1, 1, 1, 1]);
  });

  it(`should return an array when 'num' if parts = 6`, () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });
});
