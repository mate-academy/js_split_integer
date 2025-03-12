'use strict';

const splitInteger = require('./splitInteger');

// eslint-disable-next-line max-len
test('треба розділити число на рівні частини якщо значення ділиться на numberOfParts', () => {
  expect(splitInteger(12, 3)).toEqual([4, 4, 4]); // Рядок 7
  expect(splitInteger(20, 4)).toEqual([5, 5, 5, 5]);
});

test('має повернути частину, яка дорівнює значенню при поділі на 1 частину', () => {
  expect(splitInteger(5, 1)).toEqual([5]); // Рядок 13
  expect(splitInteger(100, 1)).toEqual([100]);
});

test('має сортувати частини за зростанням, якщо вони не рівні', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]); // Рядок 18
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});

test('слід додати нулі, якщо значення < numberOfParts', () => {
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
  expect(splitInteger(1, 3)).toEqual([0, 0, 1]);
});
