'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger(13, 3)).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(13, 1)).toEqual([13]);
  });

  it(`should return an integer array `, () => {
    for (const num of splitInteger(15, 5)) {
      expect(typeof num).toBe('number');
    }
  });

  it(`should return an array which length is equal to 'parts' value`, () => {
    expect(splitInteger(17, 4).length).toEqual(4);
  });

  it(`should return an array which value is in ascending order`, () => {
    const splittedNumber = splitInteger(17, 5);

    for (let i = 0; i < splittedNumber.length - 1; i++) {
      expect(splittedNumber[i]).toBeLessThanOrEqual(splittedNumber[i + 1]);
    }
  });

  it(`should return an array which values are close as it possible`, () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });
});
