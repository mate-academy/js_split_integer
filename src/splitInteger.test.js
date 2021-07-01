'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger()).toBeInstanceOf(Array);
  });

  it(`should return an array with integers`, () => {
    expect(splitInteger(7, 2)).toEqual([3, 4]);
  });

  it(`should return an array with length 5 if parts = 5`, () => {
    expect(splitInteger(30, 5)).toEqual([6, 6, 6, 6, 6]);
  });

  describe(`Function 'splitInteger':`, () => {
  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  it(`should return an array with numbers as close as possible`, () => {
    expect(splitInteger(13, 3)).toEqual([4, 4, 5]);
  });

  it(`should return an array with integers in the ascending order`, () => {
    expect(splitInteger(22, 3)).toEqual([7, 7, 8]);
  });

  it(`should return an array [4, 4, 4, 5] with num = 17 if parts = 4`, () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });
});