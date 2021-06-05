//* abstraction is showing essentials and hiding details

const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
    // this.radius = radius;
  }

  [_draw]() {
    //* to make the method also private, we add them in a Symbol [line-4]
    console.log("draw");
  }
}

const c = new Circle(1);

//? here, both the Symbol are unique
let s1 = Symbol("abc");
let s2 = Symbol("abc");
