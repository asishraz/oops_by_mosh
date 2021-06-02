// extend method of Child and Parent args

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

// Shape constructor
function Shape() {}

// Prototype of duplicate method
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

// Circle constructor
function Circle(radius) {
  this.radius = radius;
}

// extend function calling
extend(Circle, Shape);

//method overriding
Circle.prototype.duplicate = function () {
  console.log("in circle");
};

// construct calling of Circle
const c = new Circle(1);
