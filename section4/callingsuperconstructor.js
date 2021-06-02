// * This needs revision
// ! Topic - calling super constructor in section 4

function Circle(radius) {
  this.radius = radius;
}

function Shape(color, radius) {
  Circle.call(this, radius);
  this.color = color;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const c = new Circle(1);
const sh = new Shape("red");
