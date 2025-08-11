'use strict';

const splitInteger = require('./splitInteger');

const value = [8, 6, 17, 32];
const numberOfParts = [1, 2, 4, 6];
const parts = splitInteger(value, numberOfParts);



// тест який перевіряє чи повертається нам масив данних
test('Should be an array', () => {
  const result = splitInteger();
  const parts = result;
  
  expect(Array.isArray(result)).toBe(true);
});

//тест який перевіряє чи ділить число на рівні частини, якщо число можна поділити на рівні частини без залишку
test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const value = 6;
  const numberOfParts = 2;
  const parts = splitInteger(value, numberOfParts);

  expect(parts.length).toBe(numberOfParts);
  expect(parts.every((part) => part === value / numberOfParts)).toBe(true);
});

//тест перевіряє чи повертається те саме значення,якщо число поділити на 1
test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  
  expect(value === value).toBe(true);
});

//тест перевіряє чи сортуються масиви від більшогої кількості індексу до меньшої
  test('should sort parts ascending if they are not equal', () => {

  parts.sort();
  
  expect(parts.every((part, index) => part === expected[index])).toBe(true);
  });

//цей тест повинен давати false(?), бо код не повертає назад нулі, а ділить число на рівні частини і округлює останне число до більшого значення
test('should add zeros if value < numberOfParts', () => {

  expect(parts.every((part, index) => part === 0 || index < parts.length - 2)).toBe(true);
});

//цей тест перевіряє  чи різниця між максимальними і мінімальними значеннями в масиві не перевищує 1
test('the difference between the max and min number in the array should be <= 1', () => {

  const max = Math.max(...parts);//визначаємо найбільшу величину розділеного числа
  const min = Math.min(...parts);//визначаємо найменшу величину розділеного числа

  expect(max - min).toBeLessThanOrEqual(1);//більше віднімаємо вд меньшого і порівнюємо чи різниця дорівнює 1
});

//тест який перевіряє чи всі елементи масиву є числами
  test('all elements in the array should be numbers', () => {

  expect(parts.every(part => typeof part === 'number')).toBe(true);
  })
