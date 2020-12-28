// @ts-check

// BEGIN (write your solution here)

function getX() {
  return this.x;
}

function getY() {
  return this.y;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = getX;
  this.getY = getY;
}

// const point = new Point(3, 4);
// console.log(point.getX());

export default Point;
// END
