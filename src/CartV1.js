// @ts-check

// BEGIN (write your solution here)
class Cart {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  addItem(item, count) {
    this.items.push({ item, count });
    this.count += count;
  }

  getItems() {
    return this.items;
  }

  getCost() {
    return this.items.reduce((acc, curr) => acc + curr.item.price * curr.count, 0);
  }

  getCount() {
    return this.count;
  }
}

export default Cart;

// END

/* Cart.js
Реализуйте и экспортируйте по умолчанию класс Cart, представляющий из себя
покупательскую корзину. Интерфейс:

addItem(item, count) – добавляет в корзину товары и их количество. Товар это объект у
которого два свойства: name – имя и price – стоимость.

getItems – возвращает товары в формате [{ item, count }, { item, count }, ...]

getCost – возвращает стоимость корзины. Общая стоимость корзины высчитывается как
стоимость всех добавленных товаров с учетом их количества.

getCount – возвращает количество товаров в корзине
Примеры
const cart = new Cart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
cart.getItems().length; // 2
cart.getCost(); // 35 */
