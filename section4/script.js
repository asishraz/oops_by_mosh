function Circle(radius) {
  this.radius = radius;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

Circle.prototype.draw = function () {
  console.log("draw");
};

function Square(size) {
  this.size = size;
}

// Circle.prototype = Object.create(Shape.prototype);
// Square.prototype = Object.create(Shape.prototype);

const c = new Circle(1);
const s = new Shape();
const sq = new Square(2);

// so shape inherits from ShapeBase, which will have duplicate method
// and shapeBase inherits from Obj Base

// circle inherits from circle base
// and circle base inherits from Circle base object(Shape)  => parent for that object
// circlebase inherits from shapebase
// and shapebase inherits from Object base

// this is the pure example of Prototypical inheritance
