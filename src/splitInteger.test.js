'use strict';

const { splitInteger } = require('./your-code-file'); // Replace 'your-code-file' with the actual file path

describe('splitInteger', () => {
  it('should return [8] when splitting 8 into 1 part', () => {
    const result = splitInteger(8, 1);
    expect(result).to.deep.equal([8]);
  });

  it('should return [3, 3] when splitting 6 into 2 parts', () => {
    const result = splitInteger(6, 2);
    expect(result).to.deep.equal([3, 3]);
  });

  it('should return [4, 4, 4, 5] when splitting 17 into 4 parts', () => {
    const result = splitInteger(17, 4);
    expect(result).to.deep.equal([4, 4, 4, 5]);
  });

  it('should return [5, 5, 5, 5, 6, 6] when splitting 32 into 6 parts', () => {
    const result = splitInteger(32, 6);
    expect(result).to.deep.equal([5, 5, 5, 5, 6, 6]);
  });
});
