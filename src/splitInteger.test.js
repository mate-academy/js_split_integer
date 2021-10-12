'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`returns an array if function arguments are passed`, () => {
    expect(splitInteger(8, 1)).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  it(`should return the number of elements equal 
  to "parts" if "parts" is entered`, () => {
    expect(splitInteger(26, 5)).toEqual([5, 5, 5, 5, 6]);
  });

  it(`should return the parts of the number 
  that should be as close to each other 
  as possible if "parts" is entered`, () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  it(`should return numbers in ascending order 
  if "parts" is entered`, () => {
    expect(splitInteger(38, 6)).toEqual([6, 6, 6, 6, 7, 7]);
  });

  it(`should return "number" as part of "parts" if "number" is 
  a multiple of "parts"`, () => {
    expect(splitInteger(36, 6)).toEqual([6, 6, 6, 6, 6, 6]);
  });
});
