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
    expect(splitInteger(20, 7)).toHaveLength(7);

  });
  
  // write more tests here
});
