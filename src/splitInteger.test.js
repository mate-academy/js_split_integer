'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger()).toBeInstanceOf(Array);
  });

  it(`should return type of 'number' in array`, () => {
    const array = (splitInteger(25, 4));

    for (const element of array) {
      expect(typeof element).toBe('number');
    }
  });

  it(`should return an array: [5, 5, 5, 5, 6, 6] if num  = 32, 
  parts = 6`, () => {
    expect(splitInteger(32, 6))
      .toEqual([5, 5, 5, 5, 6, 6]);
  });

  it(`should return an array: [8] if num  = 8, parts = 1`, () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  it(`should return an array: [37, 37, 37] if num = 111, parts = 3`, () => {
    expect(splitInteger(111, 3)).toEqual([37, 37, 37]);
  });

  it(`should return an array with 'num' in ascending order`, () => {
    expect(splitInteger(21, 4)).toEqual([5, 5, 5, 6]);
  });
});
