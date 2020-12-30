/* eslint-disable no-undef */
// @ts-check

import Segment from '../src/SegmentToString';
import Point from '../src/PointToString';

test('test toString point', () => {
  const point1 = new Point(1, 10);
  const point2 = new Point(11, -3);
  expect(`${point1}`).toBe('(1, 10)');
  expect(`${point2}`).toBe('(11, -3)');
});

test('test toString segment', () => {
  const point1 = new Point(1, 10);
  const point2 = new Point(11, -3);
  const segment1 = new Segment(point1, point2);
  expect(`${segment1}`).toBe('[(1, 10), (11, -3)]');

  const segment2 = new Segment(point2, point1);
  expect(`${segment2}`).toBe('[(11, -3), (1, 10)]');
});
