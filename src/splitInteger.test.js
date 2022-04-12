'use strict';

const splitInteger = require('./splitInteger');

describe(`Function 'splitInteger'`, () => {
  it(`should split a number into equal parts 
      if a value is divisible by a numberOfParts`, () => {
    expect(splitInteger(16, 4))
      .toEqual([4, 4, 4, 4]);
  });

  it(`should return a part equals to a value 
      when splitting into 1 part`, () => {
    expect(splitInteger(7, 1))
      .toEqual([7]);
  });

  it('should sort parts ascending if they are not equal', () => {
    expect(splitInteger(10, 4))
      .toEqual([2, 2, 3, 3]);
  });

  it('should add zeros if value < numberOfParts', () => {
    expect(splitInteger(1, 3))
      .toEqual([0, 0, 1]);
  });
});
