// @ts-check

export default function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function getBeginPoint() {
  return this.beginPoint;
};

Segment.prototype.getEndPoint = function getEndPoint() {
  return this.endPoint;
};

// BEGIN (write your solution here)
Segment.prototype.toString = function toString() {
  return `[${this.getBeginPoint()}, ${this.getEndPoint()}]`;
};
// END

/* Реализуйте метод toString(), который преобразует точку к строке
в соответствии спримером ниже (1, 10)

const point1 = new Point(1, 10);

console.log(point1.toString()); // => (1, 10)
Segment.js
Реализуйте метод toString(), который преобразует отрезок к строке
в соответствии спримером ниже [(1, 10)]

const point1 = new Point(1, 10);
const point2 = new Point(11, -3);
const segment1 = new Segment(point1, point2);
console.log(segment1.toString()); // => [(1, 10), (11, -3)]

const segment2 = new Segment(point2, point1);
console.log(segment2.toString()); // => [(11, -3), (1, 10)] */
