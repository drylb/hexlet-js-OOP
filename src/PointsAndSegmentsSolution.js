/* eslint-disable import/extensions */
// @ts-check
import Segment from './Segment.js';
import Point from './Point.js';
// BEGIN (write your solution here)

const reverse = (segment) => {
  const newPoint1 = new Point(segment.getEndPoint().getX(), segment.getEndPoint().getY());
  const newPoint2 = new Point(segment.getBeginPoint().getX(), segment.getBeginPoint().getY());
  return new Segment(newPoint1, newPoint2);
};

export default reverse;

// END

/* Point.js
Реализуйте и экспортируйте по умолчанию функцию-конструктор Point с двумя свойствами,
представляющими координаты на плоскости x и y.

Segment.js
Реализуйте и экспортируйте по умолчанию функцию-конструктор Segment с двумя свойствами beginPoint
и endPoint и геттеры для извлечения этих свойств: getBeginPoint и getEndPoint.

solution.js
Реализуйте функцию reverse, которая принимает на вход отрезок и возвращает новый отрезок с точками,
добавленными в обратном порядке (begin меняется местами с end).

Точки в результирующем отрезке должны быть копиями (по значению) соответствующих точек исходного
отрезка. То есть они не должны быть ссылкой на один и тот же объект, так как это разные объекты
(пускай и с одинаковыми координатами).

Примеры
const beginPoint = new Point(1, 10);
const endPoint = new Point(11, -3);

const segment = new Segment(beginPoint, endPoint);
const reversedSegment = reverse(segment);

// прямое обращение к свойствам приведено только в демонстрационных целях
console.log(
  segment.beginPoint.x,
  segment.beginPoint.y,
  segment.endPoint.x,
  segment.endPoint.y,
);// => 1 10 11 -3

console.log(
  reversedSegment.beginPoint.x,
  reversedSegment.beginPoint.y,
  reversedSegment.endPoint.x,
  reversedSegment.endPoint.y,
); // => 11 -3 1 10
Подсказки
Есть разные способы организовать работу абстракции Point. Выберите тот, который считаете нужным,
на основе пройденного материала. */
