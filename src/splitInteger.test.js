'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {

  });

  it(`should return an array with 'num' if parts = 1`, () => {

  });
  
  it(`should return positive number with both negative values`, () => {
    expect(splitInteger(-3, -1)).not.toBe(-3);
  });

  it(`should return 1  with both equal values`, () => {
    expect(splitInteger(7, 7)).not.toBe(1);
  });
  // write more tests here
});
