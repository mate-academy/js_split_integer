'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`function 'splitInteger' should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger()).toBeInstanceOf(Array);
  });

  it(`variables should be of type 'number'`, () => {
    expect(splitInteger()).not.toBeNaN();
  });

  it(`should return an array: [5, 5, 5, 5, 6, 6]`, () => {
    expect(splitInteger(32, 6))
      .toEqual(expect.arrayContaining([5, 5, 5, 5, 6, 6]));
  });

  it(`should return an array: [8] if num  = 8, parts = 1`, () => {
    expect(splitInteger(8, 1)).toEqual(expect.arrayContaining([8]));
  });

  it(`should return an array: [37, 37, 37] if num = 111, parts = 3`, () => {
    expect(splitInteger(111, 3)).toEqual(expect.arrayContaining([37, 37, 37]));
  });
});
