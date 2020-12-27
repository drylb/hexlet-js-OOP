/* eslint-disable no-undef */

import { each, each1 } from '../src/collections';

test('each', () => {
  const objects = [
    { name: 'Karl' },
    { name: 'Mia' },
  ];
  each(objects, function callback() {
    this.name = this.name.split('').reverse().join('');
  });

  const expected = [
    { name: 'lraK' },
    { name: 'aiM' },
  ];
  expect(objects).toEqual(expected);
});

test('each 1', () => {
  const objects = [
    { name: 'Karl' },
    { name: 'Mia' },
  ];
  each1(objects, function callback() {
    this.name = this.name.split('').reverse().join('');
  });

  const expected = [
    { name: 'lraK' },
    { name: 'aiM' },
  ];
  expect(objects).toEqual(expected);
});
