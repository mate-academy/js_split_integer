'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(Array.isArray(splitInteger(14, 3))).toBe(true);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(12, 1)).toEqual([12]);
  });

  it(`should return an array of integers`, () => {
    const res = splitInteger(17, 4);

    for (const value of res) {
      expect(typeof value).toBe('number');
    }
  });

  it(`should return an array splitted into 5 integers if parts = 5`, () => {
    expect(splitInteger(12, 5)).toHaveLength(5);
  });

  it(`the parts of the 'num' should be as close as possible if num = 32,
   parts = 5`, () => {
    expect(splitInteger(32, 5)).toEqual([6, 6, 6, 7, 7]);
  });

  it(`should return an array with integers in the ascending order`, () => {
    const res = splitInteger(40, 6);

    for (let i = 0; i < res.length; i++) {
      if (i !== res.length - 1) {
        expect(res[i]).toBeLessThanOrEqual(res[i + 1]);
      }
    }
  });
});
