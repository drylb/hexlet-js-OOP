// @ts-check

// BEGIN (write your solution here)
export default class Square {
  constructor(side) {
    this.side = side;
  }

  getSide() {
    return this.side;
  }
}
// END

/* Square.js
Реализуйте и экспортируйте по умолчанию класс Square для представления квадрата.
У квадрата есть только одно свойство — сторона. Реализуйте метод getSide(),
возвращающий значение стороны.

Пример
const square = new Square(10);
square.getSide(); // 10
SquaresGenerator.js
 */
