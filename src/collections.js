// @ts-check

// BEGIN (write your solution here)

// VERSION #1

const each = function each(objects, func) {
  const mutatedObjects = objects.forEach((item) => func.call(item));
  return mutatedObjects;
};

// VERSION #2

const each1 = (objects, func) => objects.forEach((item) => func.call(item));

export { each, each1 };

// END

/* collection.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход коллекцию объектов
и колбек функцию. Эта функция должна вызывать колбек для каждого объекта коллекции.
Главная особенность этой функции в том, что она передает объекты коллекции не в саму функцию,
а устанавливает их как контекст.

Подобная функция существует в библиотеке JQuery

Примеры
import each from './collection.js';

const objects = [
  { name: 'Karl' },
  { name: 'Mia' },
];
each(objects, function callback() {
  this.name = this.name.split('').reverse().join('');
});

console.log(objects);
// [
//   { name: 'lraK' },
//   { name: 'aiM' },
// ]; */
