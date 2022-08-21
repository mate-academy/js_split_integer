describe(`The 'splitInteger'`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger)
      .toBeInstanceOf(Function);
  });

  it(`should return 'object'`, () => {
    expect(typeof splitInteger(5, 1))
      .toBe('object');
  });

  it(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
    expect(splitInteger(20, 4))
      .toEqual([5, 5, 5, 5]);
  });

  it(`should return a part equals to a value when splitting into 1 part`, () => {
    expect(splitInteger(3, 1))
      .toEqual([3]);
  });

  it('should sort parts ascending if they are not equal', () => {
    expect(splitInteger(14, 3))
      .toEqual([4, 5, 5]);
  });

  it('should add zeros if value < numberOfParts', () => {
    expect(splitInteger(3, 4))
      .toEqual([0, 1, 1, 1]);
  });
});
