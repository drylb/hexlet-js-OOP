/* eslint-disable no-undef */
// @ts-check

import Circle from '../src/Circle';

test('GetArea #1', () => {
  const circle = new Circle(1);
  expect(circle.getArea()).toBeCloseTo(Math.PI);
});

test('GetArea #2', () => {
  const circle = new Circle(3);
  expect(circle.getArea()).toBeCloseTo(28.274);
});

test('getCircumference #1', () => {
  const circle = new Circle(1);
  expect(circle.getCircumference()).toBeCloseTo(2 * Math.PI);
});

test('getCircumference #2', () => {
  const circle = new Circle(3);
  expect(circle.getCircumference()).toBeCloseTo(18.849);
});
