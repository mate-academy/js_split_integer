'use strict';
const chai = require('chai');
const splitInteger = require('./splitInteger');
const expect = chai.expect

test(`should split a number into equal parts if a value is divisible by numberOfParts`, () => {
  const result = splitInteger(10, 2);
  expect(result).to.deep.equal([5, 5]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);
  expect(result).to.deep.equal([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(32, 6);
  for (let i = 1; i < result.length; i++) {
    expect(result[i]).to.be.at.least(result[i - 1]);
  }
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 5);
  expect(result).to.deep.equal([0, 0, 1, 1, 1]);
});