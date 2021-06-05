// ! by default , in ES6 classes, the strict mode is on

class Circle {
  draw = function () {
    console.log(this);
  };
}

const c = new Circle();

const d = c.draw;

d();
