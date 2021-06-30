'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger()).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if 'parts' = 1`, () => {
    expect(splitInteger(4, 1)).toEqual([4]);
  });

  it(`should return an array [3, 4, 4, 4] with 'num' = 15, 'parts' = 4`, () => {
    expect(splitInteger(15, 4)).toEqual([3, 4, 4, 4]);
  });

  it(`should return an array of length 5 if 'parts' = 5`, () => {
    expect(splitInteger(25, 5)).toEqual([5, 5, 5, 5, 5]);
  });

  it(`should return an array with 'num' as close as possible`, () => {
    expect(splitInteger(7, 3)).toEqual([2, 2, 3]);
  });

  it(`should return an array with 'num' in ascending order`, () => {
    expect(splitInteger(21, 4)).toEqual([5, 5, 5, 6]);
  });
});
