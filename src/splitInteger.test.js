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

  it(`should return the parts of the 'num' as close as possible`, () => {
    expect(splitInteger(15, 3)).toEqual([5, 5, 5]);
  });

  it(`should return the integers in the ascending order`,
    () => {
      expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
    });
});
