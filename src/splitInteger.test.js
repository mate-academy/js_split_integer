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
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  it(`should return an array with 5 elements`, () => {
    expect(splitInteger(32, 5).length).toBe(5);
  });

  it(`should return an integer array`, () => {
    const result = (splitInteger(17, 3));// [5, 6, 6]

    for (const item of result) {
      expect(typeof item).toBe('number');
    }
  });

  it(`should return an array as close as possible`, () => {
    expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  });

  it(`should return an array in the ascending order`, () => {
    expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  });
});
