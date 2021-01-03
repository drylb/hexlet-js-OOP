// @ts-check

import Square from './Square';

// BEGIN (write your solution here)
export default class SquaresGenerator {
  static generate(side, amount = 5) {
    const squares = [];
    for (let i = 0; i < amount; i += 1) {
      squares.push(new Square(side));
    }
    return squares;
  }
}
// END

/* Реализуйте класс SquaresGenerator со статическим методом generate(),
принимающим два параметра: сторону и количество экземпляров квадрата (по умолчанию 5 штук),
которые нужно создать. Функция должна вернуть массив из квадратов. Экспортируйте класс по умолчанию.

Пример
const squares = SquaresGenerator.generate(3, 2);
// [new Square(3), new Square(3)]; */
