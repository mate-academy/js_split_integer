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

  // write more tests here

  it(`should return array with integer for num = '6', parts = 2`, () => {
    for (const number of splitInteger(6, 2)) {
      expect(Number.isInteger(number)).toBe(true);
    }
  });

  it(`should return 'parts' elements,`, () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  it(`should  return the parts of the 'num' as close as possible`, () => {
    const minDifferent = 1;

    for (const number of splitInteger(32, 6)) {
      expect((number + 1) - number === minDifferent).toEqual(true);
    }
  });

  it(`should return array with integers in the ascending order`, () => {
    for (const number of splitInteger(50, 7)) {
      expect((number + 1) >= number).toEqual(true);
    }
  });
});
