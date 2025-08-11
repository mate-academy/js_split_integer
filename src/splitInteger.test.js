describe('splitInteger', () => {
  it('should return an array with one element when numberOfParts is 1', () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  it('should divide the value equally when possible', () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
  });

  it('should return an array where the difference between max and min is <= 1', () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  it('should divide the value into parts with a difference of at most 1 between the numbers', () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  it('should return an array with the smallest element equal to floor(value / numberOfParts)', () => {
    expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  });

  it('should return an array with the largest element equal to ceil(value / numberOfParts)', () => {
    expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  });

  it('should return an ascending ordered array', () => {
    const result = splitInteger(17, 5);
    expect(result).toEqual([3, 3, 3, 4, 4]);
  });

  it('should work with large numbers', () => {
    const result = splitInteger(100000, 7);
    expect(result).toEqual([14285, 14285, 14285, 14286, 14286, 14286, 14286]);
  });
});
