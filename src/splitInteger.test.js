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
    expect(splitInteger(15, 5).length).toStrictEqual(5);
  });

  it(`should return "num" with numbers that are as close as possible`, () => {
    expect(splitInteger(17, 4)).not.toBe([1, 1, 5, 10]);
  });

  it(`should return integers in array in ascending order`, () => {
    expect(splitInteger(14, 3)).toStrictEqual([4, 5, 5]);
  });

  it(`should return integers in array not in descending order`, () => {
    expect(splitInteger(17, 4)).not.toBe([5, 4, 4, 4]);
  });

  it(`should return empty array if "sum" is not a number`, () => {
    expect(splitInteger('abc', 4)).toStrictEqual([]);
  });

  it(`should return empty array if "part" is not a number`, () => {
    expect(splitInteger(7, 'a')).toStrictEqual([]);
  });
});
