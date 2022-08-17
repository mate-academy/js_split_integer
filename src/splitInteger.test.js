const splitInteger = require('./splitInteger');

test(`should be declared`, () => {
  expect(splitInteger).toBeInstanceOf(Function);
});

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(4, 2)[0]).toEqual(splitInteger(4, 2)[1]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);

  expect(result).toEqual([8]);
});

test(`should sort parts ascending if they are not equal`, () => {
  const result = splitInteger(31, 5);

  expect(result[0]).toBeLessThan(result[4]);
});

test(`should add zeros if value < numberOfParts`, () => {
  const result = splitInteger(4, 8);

  expect(result[1])
    .toEqual(0);
});

test(`should work with negative values`, () => {
  const result = splitInteger(-4, 2);

  expect(result[0]).toEqual(-2);
});

test(`should ruturn empty array while negative numberOfParts`, () => {
  const result = splitInteger(4, -2);

  expect(result).toEqual([]);
});

test(`should return empty array, when numberOfParts missing`, () => {
  const result = splitInteger(4,);

  expect(result).toEqual([]);
});

test(`should return empty array, when numberOfParts is equal to 0`, () => {
  const result = splitInteger(4, 0);

  expect(result).toEqual([]);
});

test(`should return 0, when value missing`, () => {
  const result = splitInteger(null, 3);

  expect(result).toEqual([0, 0, 0]);
});

test(`should return 0, when value is 0`, () => {
  const result = splitInteger(0, 3);

  expect(result).toEqual([0, 0, 0]);
});
