/* eslint-disable no-undef */
// @ts-check

import makeUser from '../src/user';
import { getMutualFriends, getMutualFriends1 } from '../src/getMatualFriends';

test('without friends', () => {
  const user1 = makeUser();
  const user2 = makeUser();
  expect(getMutualFriends(user1, user2)).toEqual([]);
});

test('with friends', () => {
  const expected = [makeUser({ id: 2 }), makeUser({ id: 8 })];
  const user1 = makeUser({
    friends: [makeUser({ id: 2 }), makeUser({ id: 8 }), makeUser({ id: 100 })],
  });
  const user2 = makeUser({
    friends: [makeUser({ id: 2 }), makeUser({ id: 7 }), makeUser({ id: 8 })],
  });
  const mutualFriends = getMutualFriends(user1, user2);

  expect(JSON.stringify(mutualFriends)).toEqual(JSON.stringify(expected));
});

test('without friends 1', () => {
  const user1 = makeUser();
  const user2 = makeUser();
  expect(getMutualFriends1(user1, user2)).toEqual([]);
});

test('with friends 1', () => {
  const expected = [makeUser({ id: 2 }), makeUser({ id: 8 })];
  const user1 = makeUser({
    friends: [makeUser({ id: 2 }), makeUser({ id: 8 }), makeUser({ id: 100 })],
  });
  const user2 = makeUser({
    friends: [makeUser({ id: 2 }), makeUser({ id: 7 }), makeUser({ id: 8 })],
  });
  const mutualFriends = getMutualFriends1(user1, user2);

  expect(JSON.stringify(mutualFriends)).toEqual(JSON.stringify(expected));
});
