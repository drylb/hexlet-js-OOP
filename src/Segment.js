// @ts-check
// import Point from './Point.js';
// BEGIN (write your solution here)
function getBeginPoint() {
  return this.beginPoint;
}

function getEndPoint() {
  return this.endPoint;
}

function Segment(point1, point2) {
  this.beginPoint = point1;
  this.endPoint = point2;
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
}

export default Segment;
// END
