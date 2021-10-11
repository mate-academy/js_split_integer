'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger(8, 1)).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  // write more tests here
  it(`there are parts elements `, () => {
    expect(splitInteger(26, 5)).toEqual([5, 5, 5, 5, 6]);
  });

  it(`the parts of the num should be as close as possible `, () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  it(`Numbers must be in ascending order`, () => {
    expect(splitInteger(38, 6)).toEqual([6, 6, 6, 6, 7, 7]);
  });
});
