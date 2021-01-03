/* eslint-disable no-undef */
// @ts-check

import ParseError from '../src/ParseError';
import { parseJson } from '../src/json';

test('test parse json', () => {
  const json = '{ "key": "value" }';
  expect(parseJson(json)).toEqual({ key: 'value' });
});

test('test parse invalid json', () => {
  const json = '{ key": "value" }';
  expect(() => parseJson(json)).toThrow(ParseError);
});
