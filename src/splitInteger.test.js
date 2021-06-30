'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger(10, 5)).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(2, 1)).toEqual([2]);
  });

  it(`should return an integer array`, () => {
    const a = (splitInteger(20, 4));

    for (const b of a) {
      expect(typeof b).toBe('number');
    }
  });

  it(`should return an array with same lenghth as 'parts' value`, () => {
    expect(splitInteger(20, 4)).toHaveLength(4);
  });

  it(`should return an array with parts of 'num' close as possible`, () => {
    expect(splitInteger(20, 4)).toEqual([5, 5, 5, 5]);
  });

  it(`should return an array the integers in the ascending order`, () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });
});
