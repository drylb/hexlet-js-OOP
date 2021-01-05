/* eslint-disable no-undef */
// @ts-check

import NodeAgr from '../src/NodeAgr';

describe('Binary tree', () => {
  const tree = new NodeAgr(9,
    new NodeAgr(4,
      new NodeAgr(8),
      new NodeAgr(6,
        new NodeAgr(3),
        new NodeAgr(7))),
    new NodeAgr(17,
      null,
      new NodeAgr(22,
        null,
        new NodeAgr(20))));

  test('test methods', () => {
    expect(tree.getCount()).toBe(9);
    expect(tree.getSum()).toBe(96);
    expect(tree.toArray()).toEqual([9, 4, 8, 6, 3, 7, 17, 22, 20]);
    expect(tree.toString()).toEqual('(9, 4, 8, 6, 3, 7, 17, 22, 20)');
  });

  test('test predicate methods', () => {
    expect(tree.some((key) => key < 4)).toBeTruthy();
    expect(tree.some((key) => key > 22)).toBeFalsy();
    expect(tree.every((key) => key <= 22)).toBeTruthy();
    expect(tree.every((key) => key < 22)).toBeFalsy();
    expect(tree.every(Number.isInteger)).toBeTruthy();
  });
});
