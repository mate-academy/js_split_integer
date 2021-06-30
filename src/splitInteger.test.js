'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger(8, 1)).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(4, 1)).toEqual([4]);
  });

  it(`should return an array length equals 'parts'`, () => {
    expect(splitInteger(20, 7)).toHaveLength(7);
  });

  it(`should return an array in the ascending order`, () => {
    const result = (splitInteger(17, 3));

    for (let index = 1; index < result.length; index++) {
      expect(result[index]).toBeGreaterThanOrEqual(result[index - 1]);
    }
  });

  it(`should return an integer array`, () => {
    const resultInt = (splitInteger(37, 4));

    for (const num of resultInt) {
      expect(typeof num).toBe('number');
    }
  });

  it(`should return [10, 10] if num = 20, parts = 2`, () => {
    expect(splitInteger(20, 2)).toEqual([10, 10]);
  });

  it(`should return [6, 6, 6, 6, 6, 6, 6, 7, 7] if num = 56, parts = 9`, () => {
    expect(splitInteger(56, 9)).toEqual([6, 6, 6, 6, 6, 6, 6, 7, 7]);
  });

  it(`should return [103, 104, 104] if num = 311, parts = 3`, () => {
    expect(splitInteger(311, 3)).toEqual([103, 104, 104]);
  });
});
