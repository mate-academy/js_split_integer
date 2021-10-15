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
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  // write more tests here
  it(`should return length of 'result' which 
  must be equal to the 'part'`, () => {
    expect(splitInteger(17, 4)).toHaveLength(4);
  });

  it(`should return values to an array in ascending order`, () => {
    expect(splitInteger(37, 5)).toEqual([7, 7, 7, 8, 8]);
  });
});
