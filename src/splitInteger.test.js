'use strict';

describe(`Function 'splitInteger'`, () => {
  const splitInteger = require('./splitInteger');

  it(`should split a number into equal parts if a value is divisible by 
  a numberOfParts`, () => {
    expect(splitInteger(10, 5))
      .toStrictEqual([2, 2, 2, 2, 2]);
  });

  it(`should return a part equals to a value
   when splitting into 1 part`, () => {
    expect(splitInteger(9, 1))
      .toStrictEqual([9]);
  });

  it('should sort parts ascending if they are not equal', () => {
    expect(splitInteger(7, 3))
      .toStrictEqual([2, 2, 3]);
  });

  it('should add zeros if value < numberOfParts', () => {
    expect(splitInteger(3, 5))
      .toStrictEqual([0, 0, 1, 1, 1]);
  });
});
