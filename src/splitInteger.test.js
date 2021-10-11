'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger(3, 3)).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(3, 1)).toStrictEqual([3]);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(3, 1)).toStrictEqual([3]);
  });

  it(`there are parts elements (for example, if parts = 5, 
    the num would be splitted into 5 integers)`, () => {
    expect(splitInteger(0, 5)).toStrictEqual([0, 0, 0, 0, 0]);
  });

  it(`the integers in the result array should be 
  in the ascending order`, () => {
    expect(splitInteger(27, 13))
      .toStrictEqual([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]);
  });

  it(`should return result type 'Object'`, () => {
    expect(typeof splitInteger(3, 1)).toBe('object');
  });

  it(`should work with negative 'num'`, () => {
    expect(splitInteger(-15, 3)).toEqual([-5, -5, -5]);
  });
});
