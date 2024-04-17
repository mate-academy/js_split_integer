'use strict';

const assert = require('assert');

const splitInteger = require('./splitInteger');

function test(message, callback) {
  try {
    callback();
    console.log(`${message} - Passed`);
  } catch (error) {
    console.log(`${message} - Failed`);
    console.error(error);
  }
}

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  assert.deepEqual(splitInteger(10, 2), [5, 5]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  assert.deepEqual(splitInteger(7, 1), [7]);
});

test('should sort parts ascending if they are not equal', () => {
  assert.deepEqual(splitInteger(21, 6), [3, 3, 3, 3, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  assert.deepEqual(splitInteger(3, 5), [0, 0, 1, 1, 1]);
});