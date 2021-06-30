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

  it(`should return an empty array when num = 8, parts = 'string'`, () => {
    expect(splitInteger(8, 'string')).toEqual([]);
  });

  it(`should return an empty array, num = 'string', parts = 'string'`, () => {
    expect(splitInteger('string', 'string')).toEqual([]);
  });

  it(`should return [5, 5, 5] when num = 15, parts = 3`, () => {
    expect(splitInteger(15, 3)).toEqual([5, 5, 5]);
  });

  it(`should return [5, 5, 5, 5, 6, 6] when num = 32, parts = 6`, () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });
});
