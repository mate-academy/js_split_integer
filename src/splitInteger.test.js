'use strict';

const splitInteger = require('./splitInteger');

describe(`Function 'splitInteger'`, () => {
  it(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
    expect(splitInteger(8, 2)).toEqual([4, 4]);
  });

  it(`should return a part equals to a value when splitting into 1 part`, () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  it('should sort parts ascending if they are not equal', () => {
    expect(splitInteger(14, 4)).toEqual([3, 3, 4, 4]);
  });

  it('should add zeros if value < numberOfParts', () => {
    expect(splitInteger(2, 4)).toEqual([0, 0, 1, 1]);
  });
});
