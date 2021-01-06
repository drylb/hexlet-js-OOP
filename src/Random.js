// @ts-check

// BEGIN (write your solution here)
export default class Random {
  constructor(seed) {
    this.seed = seed;
    this.initSeed = seed;
  }

  reset() {
    this.seed = this.initSeed;
  }

  getNext() {
    const a = 33 + this.initSeed;
    const c = 20 + this.initSeed;
    const m = 77 + this.initSeed;

    this.seed = (a * this.seed + c) % m;

    return this.seed;
  }
}
// END
/* Random.js
Реализуйте генератор случайных чисел, представленный классом Random.
Интерфейс объекта включает в себя три функции:

Конструктор. Принимает на вход seed, начальное число генератора псевдослучайных чисел.
getNext() — метод, возвращающий новое случайное число.
reset() — метод, сбрасывающий генератор на начальное значение.
Экспортируйте класс по умолчанию.

Примеры
const seq = new Random(100);
const result1 = seq.getNext();
const result2 = seq.getNext();

result1 !== result2; // true

seq.reset();

const result21 = seq.getNext();
const result22 = seq.getNext();

result1 === result21; // true
result2 === result22; // true */
