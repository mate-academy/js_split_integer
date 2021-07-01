'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger(4, 2)).toBeInstanceOf(Array);
  });

  it(`should return an array if part = 1`, () => {
    expect(splitInteger(9, 1)).toEqual([9]);
  });

  it(`should return an integer array`, () => {
    const res = splitInteger(4, 2);

    expect(typeof res[0]).toBe('number');
  });

  it(`should split array into 3 equal parts if num = 9, part = 3`, () => {
    expect(splitInteger(9, 3)).toEqual([3, 3, 3]);
  });

  it(`should split array into 2 equal part if num = 4 part = 2`, () => {
    expect(splitInteger(4, 2)).toEqual([2, 2]);
  });

  it(`should split array into 3 part (num/2) & (num/2 +1) & (num/2 +1)
   if num add and part = 3`, () => {
    expect(splitInteger(8, 3)).toEqual([2, 3, 3]);
  });

  it(`should split array into 2 part (num/2) and (num /2 + 1)
  if num = 7 part = 2`, () => {
    expect(splitInteger(7, 2)).toEqual([3, 4]);
  });

  it(`should return [3, 3, 4] array if num = 10 part = 3`, () => {
    expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  });

  it(`should return ascending array [3, 3, 4] if num = 10 part = 3`, () => {
    expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  });
});
