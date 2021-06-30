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
    expect(splitInteger(3, 1)).toEqual([3]);
  });

  it(`should return an array of integers`, () => {
    const res = (splitInteger(20, 3));

    for (const item of res) {
      expect(typeof item).toBe('number');
    }
  });

  it(`should return even parts if 'num % parts = 0'`, () => {
    expect(splitInteger(25, 5)).toEqual([5, 5, 5, 5, 5]);
  });

  it(`should return array in the ascending order`, () => {
    expect(splitInteger(10, 4)).toEqual([2, 2, 3, 3]);
  });
});
