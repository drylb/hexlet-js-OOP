// @ts-check
/* eslint-disable import/prefer-default-export */

import ParseError from './ParseError';

// BEGIN (write your solution here)

const parseJson = (str) => {
  try {
    JSON.parse(str);
  } catch {
    throw new ParseError();
  }
  return JSON.parse(str);
};

export { parseJson };

// END

/* json.js
Реализуйте и экспортируйте функцию-обёртку parseJson() для функции JSON.parse(),
которая работает как встроенная. Но в случае если в функцию была передана некорректная json строка,
функция должна выбросить исключение ParseError. Класс ParseError реализовывать не нужно,
он уже импортирован.

Пример:
const json = '{ "key": "value" }';
parseJson(json); // { key: 'value' }

const incorrectJson = '{ key": "value" }';
parseJson(incorrectJson); // => ParseError: Invalid JSON string */
