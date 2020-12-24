// @ts-check
/* eslint-disable import/prefer-default-export */

// BEGIN (write your solution here)

// VERSION #1

const getMutualFriends = (user1, user2) => {
  const userOneFriends = user1.getFriends();
  const userTwoFriends = user2.getFriends().map(({ id }) => id);
  return userOneFriends.filter(({ id }) => userTwoFriends.includes(id));
};

// VERSION #2

const getMutualFriends1 = (user1, user2) => {
  const userOneFriends = user1.getFriends();
  const userTwoFriends = user2.getFriends();
  return userOneFriends.filter(
    (friend1) => userTwoFriends.some((friend2) => friend1.id === friend2.id),
  );
};

export { getMutualFriends, getMutualFriends1 };

// END

/* users.js
Реализуйте и экспортируйте функцию getMutualFriends(), которая принимает на
вход двух пользователей и возвращает массив состоящий из общих друзей этих пользователей.

Интерфейс абстракции "Пользователь":

user.id – возвращает идентификатор пользователя, по которому можно его отличить от остальных.
user.getFriends() – возвращает список друзей (то есть пользователей).
const user1 = makeUser({
  friends: [
    makeUser({ id: 1 }),
    makeUser({ id: 2 }), // общий друг
  ],
});
const user2 = makeUser({
  friends: [
    makeUser({ id: 2 }), // общий друг
    makeUser({ id: 3 }),
  ],
});

getMutualFriends(user1, user2); // [ { friends: [], id: 2, getFriends: [Function: getFriends] } ] */
