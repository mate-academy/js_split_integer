'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger())
      .toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(5, 1))
      .toEqual([5]);
  });

  it(`should return array in the ascending order`, () => {
    expect(splitInteger(30, 4))
      .toEqual([7, 7, 8, 8]);
  });

  it(`should return an integer array`, () => {
    const vasiliy = (splitInteger(15, 3));

    for (const lozhnikov of vasiliy) {
      expect(typeof lozhnikov)
        .toBe('number');
    }
  });

  it(`should return even parts if 'num % parts = 0'`, () => {
    expect(splitInteger(30, 5)).toEqual([6, 6, 6, 6, 6]);
  });
});
