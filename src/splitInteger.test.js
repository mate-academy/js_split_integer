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

  it(`'should return 5 integers if parts = 5`, () => {
    expect(splitInteger(5, 5)).toStrictEqual([1, 1, 1, 1, 1]);
  });

  it(`should return array in the ascending order`, () => {
    expect(splitInteger(27, 13))
      .toStrictEqual([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]);
  });
});
