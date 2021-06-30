'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
  });

  it(`should return an array`, () => {
    expect(splitInteger(32, 8)).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(20, 1)).toMatchObject([20]);
  });

  it(`should return [5, 5, 5]' if num = 15, parts = 3`, () => {
    expect(splitInteger(15, 3)).toMatchObject([5, 5, 5]);
  });

  it(`parts should be as close as possible and in the ascending order`, () => {
    expect(splitInteger(100, 3)).toMatchObject([33, 33, 34]);
  });

  // write more tests here
});
