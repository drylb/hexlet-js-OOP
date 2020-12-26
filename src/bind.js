/* eslint-disable func-names */
// @ts-check

// BEGIN (write your solution here)

// VERSION #1

const bind = function bind(obj, fn) {
  return function (...args) {
    return fn.apply(obj, args);
  };
};

// VERSION #2

const bind1 = (obj, fn) => (...args) => fn.apply(obj, args);

// VERSION #3

const bind2 = (obj, fn) => (...args) => fn.call(obj, ...args);

export { bind, bind1, bind2 };

// END

/* Функции bind(), apply() и call() работают с контекстом и аргументами.В этом упражнении
вы научитесь заменять одну функцию другой для получения функциональности, аналогичной bind().

bind.js
Реализуйте и экспортируйте по умолчанию функцию, которая ведет
себя аналогично встроеннойbind(obj, fn). Аргументы функции:

obj – объект выступающий в роли контекста
fn() – функция привязываемая к контексту
const obj = { number: 5 };
const fn = function fn(number) {
  return number + this.number;
};
const fnWithContext = bind(obj, fn);

// Принимает столько же аргументов сколько и исходная функция
fnWithContext(3); // 8
Примечания
Ограничение: для реализации нельзя пользоваться только встроенной функцией bind(). */
