/* eslint-disable no-undef */
// @ts-check

import SquaresGenerator from '../src/SquaresGenerator';
import Square from '../src/Square';

test('SquaresGenerator #1', () => {
  const squares = SquaresGenerator.generate(1, 1);
  const expected = [new Square(1)];
  expect(squares).toEqual(expected);
});

test('SquaresGenerator #2', () => {
  const squares = SquaresGenerator.generate(3, 2);
  const expected = [new Square(3), new Square(3)];
  expect(squares).toEqual(expected);
  expect(squares[0]).not.toBe(squares[1]);
});

test('SquaresGenerator #3 default count', () => {
  const squares = SquaresGenerator.generate(2);
  expect(squares).toHaveLength(5);
});
