'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger([10, 2]).constructor.name)
      .toEqual('Array');
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(10, 1))
      .toEqual([10]);
  });

  it(`should return parts elements`, () => {
    expect(splitInteger(5, 5))
      .toEqual([1, 1, 1, 1, 1]);
  });

  it(`should return an array length equal to parts`, () => {
    expect(splitInteger(15, 5).length)
      .toBe(5);
  });

  it(`should return an array in the ascending order`,
    () => {
      const res = (splitInteger(20, 3));

      for (let i = 1; i < res.length; i++) {
        expect(res[i]).toBeGreaterThanOrEqual(res[i - 1]);
      }
    });

  it(`the parts of the num should be as close as possible`, () => {
    expect(splitInteger(20, 5))
      .toEqual([4, 4, 4, 4, 4]);
  });
});
