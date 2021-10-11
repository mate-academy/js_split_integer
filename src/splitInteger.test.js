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
    expect(splitInteger(1, 1)).toEqual([1]);
  });

  it(`should return an array in the ascending order`, () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  it(`the number of elements should be equal to the parts`, () => {
    expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
  });

  it(`parts of the num should be as close as possible`, () => {
    expect(splitInteger(11, 3)).toEqual([3, 4, 4]);
  });
});
