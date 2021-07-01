'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger(9, 3)).toBeInstanceOf(Array);
  });

  // it(`should return an array with 'num' if parts = 1`,
  //   () => {
  //     const expectNum = 19;

  //     expect(splitInteger(expectNum, 1).toEqual([19]));
  //   });

  it(`should return equal 'parts' of the 'num'`,
    () => {
      expect(splitInteger(60, 5)).toEqual([12, 12, 12, 12, 12]);
    });

  it(`should return the 'parts' of the 'num' as close as possible`,
    () => {
      expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
    });

  it(`should return an array with length equal to 'parts' value`,
    () => {
      expect(splitInteger(32, 6).length).toBe(6);
    });

  it(`should return an array with num if num = 0 'parts' = 1`,
    () => {
      const expectNum = 0;

      expect(splitInteger(expectNum, 1)).toEqual([expectNum]);
    });

  it(`should return an array with integers in the ascending order`,
    () => {
      expect(splitInteger(11, 4)).toEqual([2, 3, 3, 3]);
    });
});
