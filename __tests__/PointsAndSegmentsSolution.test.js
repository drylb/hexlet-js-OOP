/* eslint-disable no-undef */
// @ts-check

import Segment from '../src/Segment';
import Point from '../src/Point';
import reverse from '../src/PointsAndSegmentsSolution';

test('reverse', () => {
  const point1 = new Point(1, 10);
  const point2 = new Point(11, -3);
  const segment = new Segment(point1, point2);
  const reversedSegment = reverse(segment);

  expect(reversedSegment.getBeginPoint()).toEqual(point2);
  expect(reversedSegment.getEndPoint()).toEqual(point1);

  expect(reversedSegment.getBeginPoint()).not.toBe(point2);
  expect(reversedSegment.getEndPoint()).not.toBe(point1);

  expect(reversedSegment).toBeInstanceOf(Segment);
  expect(reversedSegment.getEndPoint()).toBeInstanceOf(Point);
  expect(reversedSegment.getBeginPoint()).toBeInstanceOf(Point);
});
