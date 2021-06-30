'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = splitInteger(10, 5);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    const result = splitInteger(10, 1);

    expect(result).toEqual([10]);
  });

  it(`should return an array [3, 3] if num = 6, parts = 2`, () => {
    const result = splitInteger(6, 2);

    expect(result).toEqual([3, 3]);
  });

  it(`should return an array [4, 4, 4, 5] if num = 17, parts = 4`, () => {
    const result = splitInteger(17, 4);

    expect(result).toEqual([4, 4, 4, 5]);
  });

  it(`should return an array [5, 5, 5, 5, 5] if num = 25, parts = 5`, () => {
    const result = splitInteger(25, 5);

    expect(result).toEqual([5, 5, 5, 5, 5]);
  });
});
