// @ts-check

// BEGIN (write your solution here)

// VERSION #1

const make = (num, den) => {
  const ratinaol = {
    numer: num,
    denom: den,
    getNumer() {
      return this.numer;
    },
    getDenom() {
      return this.denom;
    },
    toString() {
      return `${this.getNumer()}/${this.getDenom()}`;
    },
    add(rat) {
      const newNumer = this.numer * rat.getDenom() + this.denom * rat.getNumer();
      const newDenom = this.denom * rat.getDenom();
      return (make(newNumer, newDenom));
    },
  };
  return ratinaol;
};

// VERSION #2

const make1 = (numer, denom) => ({
  numer,
  denom,
  getNumer() {
    return this.numer;
  },
  getDenom() {
    return this.denom;
  },
  toString() {
    return `${this.getNumer()}/${this.getDenom()}`;
  },
  add(rat) {
    const newNumer = this.getNumer() * rat.getDenom() + this.getDenom() * rat.getNumer();
    const newDenom = this.getDenom() * rat.getDenom();
    return (make(newNumer, newDenom));
  },
});

export { make, make1 };

// END

/* Подобное задание уже было в курсе по абстракциям с помощью данных.
Теперь мы делаем то же самое, но используя объекты и методы. Нормализацию дробей делать не нужно.

rational.js
Реализуйте и экспортируйте по умолчанию функцию, которая создает рациональное число.
Рациональное число должно быть представлено объектом со следующими методами:

Геттер getNumer() - возвращает числитель
Геттер getDenom() - возвращает знаменатель
Геттер toString() - возвращает строковое представление числа
Метод add() - складывает дробь на которой он был вызван с переданной дробью и возвращает
новое рациональное число (не изменяет текущее!)
import make from './rational.js';

const rat1 = make(3, 9);
rat1.getNumer(); // 3
rat1.getDenom(); // 9

const rat2 = make(10, 3);

// Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
const rat3 = rat1.add(rat2);
rat3.toString(); // '99/27' */
