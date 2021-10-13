'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger(5, 1)).toBeInstanceOf(Array);
  });

  it(`should return an array [5] if num = 5, parts = 1`, () => {
    expect(splitInteger(5, 1)).toEqual([5]);
  });

  it(`should return empty array if num = 5, parts = -1`, () => {
    expect(splitInteger(5, -1)).toEqual([]);
  });

  it(`should return an array [1, 1, 1, 1, 1] if num = 5, parts = 5`, () => {
    expect(splitInteger(5, 5)).toEqual([1, 1, 1, 1, 1]);
  });

  it(`should return an array [5, 5, 5, 5, 6, 6] if num = 31, parts = 6`, () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });
  
});
