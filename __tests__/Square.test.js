/* eslint-disable no-undef */
// @ts-check

import Square from '../src/Square';

test('GetSide', () => {
  const square = new Square(4);
  const actual = square.getSide();
  expect(actual).toBe(4);
});
