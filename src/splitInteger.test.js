'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(typeof (splitInteger(8, 2))).toEqual('object');
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });
  // write more tests here

  it(`should return an array of integers`, () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  it(`should return array with 'num' elements of 1 if 'part' = 'num'`, () => {
    expect(splitInteger(2, 2)).toEqual([1, 1]);
  });

  it(`should return arr of 1 w/leading elms=0 if part>num`,
    () => {
      expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
    });

  it(`should return array with non-descending elements`, () => {
    const a = splitInteger(32, 6);
    const length = a.length;
    let result = true;

    //
    for (let i = 0; i < length - 1; i++) {
      if (a[i + 1] - a[i] < 0) {
        result = false; break;
      }
    }
    expect(result).toEqual(true);
  });

  it(`should return array of 'parts' elements`, () => {
    const num = 10; const parts = 6;
    const result = splitInteger(num, parts);
    // const result = (a.length === parts);

    //
    expect(result.length).toEqual(parts);
  });

  it(`should return array of 100000 elements within 5ms`, () => {
    const start = Date.now();

    splitInteger(100000, 100000);

    const end = Date.now();
    const result = ((end - start) < 17);

    //
    expect(result).toEqual(true);
  });
});
