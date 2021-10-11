'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger(65, 5)).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(33, 1)).toEqual([33]);
  });

  it(`if parts = 5, the num would be splitted into 5 integers`, () => {
    expect(splitInteger(25, 5)).toEqual([5, 5, 5, 5, 5]);
  });

  it(`the parts of the num should be as close as possible`, () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  it(`integers in the result array should be in ascending order;`, () => {
    expect(splitInteger(73, 5)).toEqual([14, 14, 15, 15, 15]);
  });

  it(`the input to your function will always be valid`, () => {
    expect(splitInteger(324, 5)).toEqual([64, 65, 65, 65, 65]);
  });
});
