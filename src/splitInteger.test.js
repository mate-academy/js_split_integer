'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger(8, 4))
      .toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    const expectNum = 3;

    expect(splitInteger(expectNum, 1)).toEqual([3]);
  });

  it(`should return an array of integers`, () => {
    const res = (splitInteger(20, 3));

    for (const check of res) {
      expect(typeof check).toBe('number');
    }
  });

  it(`should return an array which length is equal to 'parts' value`, () => {
    expect(splitInteger(20, 3).length).toBe(3);
  });

  it(`should return an array which contain as close parts of 'num' as possible`,
    () => {
      expect(splitInteger(20, 9)).toEqual([2, 2, 2, 2, 2, 2, 2, 3, 3]);
    });

  it(`should return an array consisting of integers in the ascending order`,
    () => {
      const res = (splitInteger(20, 3));

      for (let check = 1; check < res.length; check++) {
        expect(res[check]).toBeGreaterThanOrEqual(res[check - 1]);
      }
    });
});
