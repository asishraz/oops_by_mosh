function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 0, y: 0 };

  this.optimumLocation = function () {
    //   logic will add here
  };

  this.draw = function () {
    this.optimumLocation();+
    console.log("abstraction");
    console.log("Radius is: ", this.radius);
  };
}

const circle = new Circle(5);
// circle.defaultLocation = false;
console.log(circle);
