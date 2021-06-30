'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger()).toBeInstanceOf(Array);
  });

  it(`should return an array of integers`, () => {
    const res = (splitInteger(20, 3));

    for (const item of res) {
      expect(typeof item).toBe('number');
    }
  });

  it(`should return an array in the ascending order`,
    () => {
      const result = (splitInteger(20, 3));

      for (let index = 1; index < result.length; index++) {
        expect(result[index]).toBeGreaterThanOrEqual(result[index - 1]);
      }
    });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(10, 1)).toEqual([10]);
  });

  it(`should return array with length is equal to the parts parametr`, () => {
    expect(splitInteger(10, 10).length).toEqual(10);
  });

  it(`should return array in the ascending order`, () => {
    expect(splitInteger(50, 3)).toEqual([16, 17, 17]);
  });

  it(`should return [5, 5] if num = 10, parts = 2`, () => {
    expect(splitInteger(10, 2)).toEqual([5, 5]);
  });

  it(`should return [10, 10, 10] if num = 30, parts = 3`, () => {
    expect(splitInteger(30, 3)).toEqual([10, 10, 10]);
  });

  it(`should return [59, 59, 59, 59, 60, 60] if num = 356, parts = 6`, () => {
    expect(splitInteger(356, 6)).toEqual([59, 59, 59, 59, 60, 60]);
  });

  it(`should return [31881, 31882, 31882] if num = 95645, parts = 3`, () => {
    expect(splitInteger(95645, 3)).toEqual([31881, 31882, 31882]);
  });
});
