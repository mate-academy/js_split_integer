'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array of numbers`, () => {
    expect(splitInteger()).toBeInstanceOf(Array);

    for (const result in splitInteger) {
      expect(typeof result).toEqual(['number']);
    }
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(5, 1)).toEqual([5]);
  });

  it(`should  return integer numbers `, () => {
    expect(splitInteger(7, 2)).toEqual([3, 4]);
  });

  it(`should return an array that length is equal to the 'parts' value`, () => {
    expect(splitInteger(5, 5)).toEqual([1, 1, 1, 1, 1]);
  });

  it(`should return an array with as close values as possible`, () => {
    expect(splitInteger(20, 3)).toEqual([6, 7, 7]);
  });

  it(`should return array in ascending order`, () => {
    expect(splitInteger(169, 6)).toEqual([28, 28, 28, 28, 28, 29]);
  });
});
