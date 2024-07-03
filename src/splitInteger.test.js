'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
    let result = splitInteger(6, 2); 
    let expected = [3, 3];
    if (result !== expected) {
      throw new Error(`${result} is not equql to ${expected}`);
    }

});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
    let result = splitInteger(8, 1); 
    let expected = [3];
    if (result !== expected) {
      throw new Error(`${result} is not equql to ${expected}`);
    }
});

test('should sort parts ascending if they are not equal', () => {
  let result = splitInteger(17, 4); 
    let expected = [4, 4, 4, 5];
    if (result !== expected) {
      throw new Error(`${result} is not equql to ${expected}`);
    }
});

test('should add zeros if value < numberOfParts', () => {
  let result = splitInteger(1, 2); 
    let expected = [0, 1];
    if (result !== expected) {
      throw new Error(`${result} is not equql to ${expected}`);
    }
});

