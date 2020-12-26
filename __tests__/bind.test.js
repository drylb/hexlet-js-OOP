/* eslint-disable no-undef */
// @ts-check

import { bind, bind1, bind2 } from '../src/bind';

test('bind', () => {
  const obj = { number: 5 };
  const fn1 = function fn(number) {
    return number + this.number;
  };
  const fnWithContext = bind(obj, fn1);

  expect(fnWithContext(3)).toBe(8);
  expect(fnWithContext(0)).toBe(5);
  expect(fnWithContext.call({ number: 11 }, 3)).toBe(8);

  const fn2 = function fn(number1, number2) {
    return number1 + this.number + number2;
  };
  const fn2WithContext = bind(obj, fn2);

  expect(fn2WithContext(3, 1)).toBe(9);
  expect(fn2WithContext(0, -1)).toBe(4);
  expect(fn2WithContext.call({ number: 11 }, 3, 8)).toBe(16);
});

test('bind 1', () => {
  const obj = { number: 5 };
  const fn1 = function fn(number) {
    return number + this.number;
  };
  const fnWithContext = bind1(obj, fn1);

  expect(fnWithContext(3)).toBe(8);
  expect(fnWithContext(0)).toBe(5);
  expect(fnWithContext.call({ number: 11 }, 3)).toBe(8);

  const fn2 = function fn(number1, number2) {
    return number1 + this.number + number2;
  };
  const fn2WithContext = bind1(obj, fn2);

  expect(fn2WithContext(3, 1)).toBe(9);
  expect(fn2WithContext(0, -1)).toBe(4);
  expect(fn2WithContext.call({ number: 11 }, 3, 8)).toBe(16);
});

test('bind 2', () => {
  const obj = { number: 5 };
  const fn1 = function fn(number) {
    return number + this.number;
  };
  const fnWithContext = bind2(obj, fn1);

  expect(fnWithContext(3)).toBe(8);
  expect(fnWithContext(0)).toBe(5);
  expect(fnWithContext.call({ number: 11 }, 3)).toBe(8);

  const fn2 = function fn(number1, number2) {
    return number1 + this.number + number2;
  };
  const fn2WithContext = bind2(obj, fn2);

  expect(fn2WithContext(3, 1)).toBe(9);
  expect(fn2WithContext(0, -1)).toBe(4);
  expect(fn2WithContext.call({ number: 11 }, 3, 8)).toBe(16);
});
