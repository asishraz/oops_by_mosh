function Circle(radius) {
  // instance members
  this.radius = radius;
  this.move = function () {
    this.draw();
  };
}

//prototype members
Circle.prototype.draw = function () {
  console.log("Now resides under proto");
};

// for overriding the prototype attributes like .toString()
Circle.prototype.toString = function () {
  return "Circle with radius " + this.radius;
};
const c1 = new Circle(1);
const c2 = new Circle(2);
