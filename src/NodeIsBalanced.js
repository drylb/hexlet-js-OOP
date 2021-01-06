// @ts-check

export default class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  // BEGIN (write your solution here)
  reduce(fn, initValue) {
    let acc = fn(initValue, this.key);
    if (this.left !== null) {
      acc = this.left.reduce(fn, acc);
    }
    if (this.right !== null) {
      acc = this.right.reduce(fn, acc);
    }
    return acc;
  }

  getCount() {
    return this.reduce((acc) => acc + 1, 0);
  }

  isBalanced() {
    const leftCount = this.left?.getCount() ?? 0;
    const rightCount = this.right?.getCount() ?? 0;
    if (Math.abs(leftCount - rightCount) > 2) {
      return false;
    }
    if (this.left !== null) {
      return this.left.isBalanced();
    }
    if (this.right !== null) {
      return this.right.isBalanced();
    }
    return true;
  }
  // END
}

// console.log(tree1.isBalanced());
/* Node.js
Реализуйте метод isBalanced(), который проверяет дерево на сбалансированность.
Он возвращает true, если количество узлов в левом и правом поддеревьях каждого узла
отличается не более, чем на 2. В ином случае метод должен вернуть false.

Примеры
const tree1 = new Node(4,
  new Node(3,
    new Node(2)));

tree1.isBalanced(); // true

const tree2 = new Node(4,
  new Node(3,
    new Node(2,
      new Node(1))));

tree2.isBalanced(); // false */
