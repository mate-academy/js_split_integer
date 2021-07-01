});

it(`should return an array`, () => {
  expect(splitInteger()).toBeInstanceOf(Array);
});

it(`should return an array with 'num' if parts = 1`, () => {
  expect(splitInteger(10, 1)).toEqual([10]);
});

it(`should return array with length equal to the parts parametr`, () => {
  expect(splitInteger(1, 1).length).toEqual(1);
});

it(`should return array in the ascending order`, () => {
  expect(splitInteger(61, 3)).toEqual([20, 20, 21]);
});

it(`should return [4, 4, 4, 5] if num = 17, parts =4`, () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});

});