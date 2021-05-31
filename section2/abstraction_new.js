function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  let hiddenFunction = function (factor) {
    // logic here
  };

  this.draw = function () {
    let x = 3;
    hiddenFunction(3);
    console.log("draw done");
  };
}

const circle = new Circle(5);
circle.draw();
