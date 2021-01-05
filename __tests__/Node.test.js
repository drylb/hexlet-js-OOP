/* eslint-disable no-undef */
// @ts-check

import Node from '../src/Node';

describe('Binary tree', () => {
  test('test getters', () => {
    const tree = new Node(9, new Node(4), new Node(17));

    expect(tree.getKey()).toBe(9);
    expect(tree.getLeft().getKey()).toBe(4);
    expect(tree.getRight().getKey()).toBe(17);
  });

  test('test empty tree', () => {
    const tree = new Node();

    expect(tree.getKey()).toBeNull();
    expect(tree.getLeft()).toBeNull();
    expect(tree.getRight()).toBeNull();
  });

  test('search', () => {
    const expected1 = new Node(5);
    const expected2 = new Node(22, new Node(20), null);
    const tree = new Node(9,
      new Node(4,
        new Node(3),
        new Node(6,
          expected1,
          new Node(7))),
      new Node(17,
        null,
        expected2));

    expect(tree.search(5)).toBe(expected1);
    expect(tree.search(22)).toBe(expected2);
    expect(tree.search(35)).toBeNull();
    expect(tree.search(2)).toBeNull();
  });

  test('test search algorithm', () => {
    const tree = new Node(9,
      new Node(4,
        new Node(6,
          new Node(5),
          new Node(7)),
        new Node(3)),
      new Node(17,
        null,
        new Node(22,
          null,
          new Node(20))));

    expect(tree.search(5)).toBeNull();
    expect(tree.search(7)).toBeNull();
    expect(tree.search(6)).toBeNull();
    expect(tree.search(4).getKey()).toBe(4);
    expect(tree.search(22).getKey()).toBe(22);
  });
});

describe('Binary tree 1', () => {
  test('test getters', () => {
    const tree = new Node();
    tree.insert(9);
    tree.insert(4);
    tree.insert(17);

    expect(tree.getKey()).toBe(9);
    expect(tree.getLeft().getKey()).toBe(4);
    expect(tree.getRight().getKey()).toBe(17);
  });

  test('test empty tree', () => {
    const tree = new Node();

    expect(tree.getKey()).toBeNull();
    expect(tree.getLeft()).toBeNull();
    expect(tree.getRight()).toBeNull();
  });

  test('insert', () => {
    const tree = new Node();
    tree.insert(9);
    tree.insert(17);
    tree.insert(4);
    tree.insert(3);
    tree.insert(6);
    tree.insert(22);
    tree.insert(5);
    tree.insert(7);
    tree.insert(20);
    tree.insert(4);
    tree.insert(3);

    expect(tree.getKey()).toBe(9);

    expect(tree.getLeft().getKey()).toBe(4);

    expect(tree.getLeft().getLeft().getKey()).toBe(3);
    expect(tree.getLeft().getLeft().getLeft()).toBeNull();
    expect(tree.getLeft().getLeft().getRight()).toBeNull();

    expect(tree.getLeft().getRight().getKey()).toBe(6);

    expect(tree.getLeft().getRight().getLeft().getKey()).toBe(5);
    expect(tree.getLeft().getRight().getLeft().getLeft()).toBeNull();
    expect(tree.getLeft().getRight().getLeft().getRight()).toBeNull();

    expect(tree.getLeft().getRight().getRight().getKey()).toBe(7);
    expect(tree.getLeft().getRight().getRight().getLeft()).toBeNull();
    expect(tree.getLeft().getRight().getRight().getRight()).toBeNull();

    expect(tree.getRight().getKey()).toBe(17);
    expect(tree.getRight().getLeft()).toBeNull();

    expect(tree.getRight().getRight().getKey()).toBe(22);
    expect(tree.getRight().getRight().getRight()).toBeNull();

    expect(tree.getRight().getRight().getLeft().getKey()).toBe(20);
    expect(tree.getRight().getRight().getLeft().getLeft()).toBeNull();
    expect(tree.getRight().getRight().getLeft().getRight()).toBeNull();
  });
});
