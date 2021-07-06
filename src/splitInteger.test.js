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
    expect(splitInteger(5, 1)).toEqual([5]);
  });

  it(`should return array with length is equal to the parts parametr`, () => {
    expect(splitInteger(1, 5).length).toEqual(5);
  });

  it(`should return [5, 5, 5], if 'num' = 15, 'part' = 3`, () => {
    expect(splitInteger(15, 3)).toEqual([5, 5, 5]);
  });

  it(`should return [4, 4, 5], if 'num' = 13, 'part' = 3`, () => {
    expect(splitInteger(13, 3)).toEqual([4, 4, 5]);
  });
});
