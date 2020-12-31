/* eslint-disable no-undef */
// @ts-check

import Cart from '../src/CartV1';
import Cart1 from '../src/CartV2';

test('Cart', () => {
  const cart = new Cart();
  expect(cart.getItems()).toHaveLength(0);

  cart.addItem({ name: 'car', price: 3 }, 5);
  const expectedItems = [{ item: { name: 'car', price: 3 }, count: 5 }];
  expect(cart.getItems()).toStrictEqual(expectedItems);
  expect(cart.getCost()).toBe(15);
  expect(cart.getCount()).toBe(5);

  cart.addItem({ name: 'house', price: 10 }, 2);
  const expectedItems2 = [
    { item: { name: 'car', price: 3 }, count: 5 },
    { item: { name: 'house', price: 10 }, count: 2 },
  ];
  expect(cart.getItems()).toStrictEqual(expectedItems2);
  expect(cart.getCost()).toBe(35);
  expect(cart.getCount()).toBe(7);
});

test('Cart 1', () => {
  const cart = new Cart1();
  expect(cart.getItems()).toHaveLength(0);

  cart.addItem({ name: 'car', price: 3 }, 5);
  const expectedItems = [{ item: { name: 'car', price: 3 }, count: 5 }];
  expect(cart.getItems()).toStrictEqual(expectedItems);
  expect(cart.getCost()).toBe(15);
  expect(cart.getCount()).toBe(5);

  cart.addItem({ name: 'house', price: 10 }, 2);
  const expectedItems2 = [
    { item: { name: 'car', price: 3 }, count: 5 },
    { item: { name: 'house', price: 10 }, count: 2 },
  ];
  expect(cart.getItems()).toStrictEqual(expectedItems2);
  expect(cart.getCost()).toBe(35);
  expect(cart.getCount()).toBe(7);
});
