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
    expect(splitInteger(8, 1))
      .toEqual([8]);
  });

  it(`should return an array if 'num' = 66, 'parts' = '3`, () => {
    expect(splitInteger(66, 3))
      .toEqual([22, 22, 22]);
  });
});
