describe(`The 'spitInteger'`, () => {
  const splitInteger = require('./splitInteger');

  test(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  test(`should return 'array'`, () => {
    expect(splitInteger(4, 2)).toBeInstanceOf(Array);
  });

  test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
    const result = splitInteger(10, 2);

    expect(result[0]).toEqual(result[1]);
  });

  test(`should return a part equals to a value when splitting into 1 part`, () => {
    const result = splitInteger(15, 1);

    expect(result).toEqual([15]);
  });

  test('should sort parts ascending if they are not equal', () => {
    const result = splitInteger(32, 6);

    expect(result).toEqual(result.sort());
  });

  test('should add zeros if value < numberOfParts', () => {
    const result = splitInteger(2, 3);

    expect(result).toEqual([0, 1, 1]);
  });
});
