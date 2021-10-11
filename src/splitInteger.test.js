'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = splitInteger(8, 1);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(5, 1)).toEqual([5]);
  });

  it(`should return an empty array if parts = 0`, () => {
    expect(splitInteger(2, 0)).toEqual([]);
  });

  it(`should return an array with integers in the ascending order`, () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  it(`should return as close as possible parts of numbers`, () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  it(`shold return an array if num = -10`, () => {
    expect(splitInteger(-10, 5)).toEqual([-2, -2, -2, -2, -2]);
  });
});
