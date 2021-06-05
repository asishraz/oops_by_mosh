_radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("draw and radius: " + _radius.get(this));
  }
}

const c = new Circle(10);
console.log("first", _radius.get(c));
c.draw();
