'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should retur an array`, () => {
    expect(splitInteger(8, 4))
      .toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    const expectNum = 3;

    expect(splitInteger(expectNum, 1)).toEqual([3]);
  });
  // write more tests here
});
