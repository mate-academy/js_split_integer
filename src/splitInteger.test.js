'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`Function 'splitInteger' should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`Function 'splitInteger'should return an array`, () => {
    expect(splitInteger()).toEqual([]);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(15, 1)).toEqual([15]);
  });

  it(`should return an array where the number of elements = "part"`, () => {
    expect(splitInteger(25, 4)).toEqual([6, 6, 6, 7]);
  });

  it(`the parts of the num should be as close as possible`, () => {
    expect(splitInteger(7, 3)).toEqual([2, 2, 3]);
  });

  it(`the integers in the result array should be in ascending order;`, () => {
    expect(splitInteger(22, 4)).toEqual([5, 5, 6, 6]);
  });
});
