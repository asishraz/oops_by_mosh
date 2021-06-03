// earlier we used to define constructor like this

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// * now with ES6 classes, we can define the above constrcutor like this

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function () {
      console.log("move");
    };
  }

  draw() {
    console.log("draw");
  }
}

const c = new Circle(10);
