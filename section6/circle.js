// Implementation Detail

_radius = new WeakMap();

// Public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("draw and the radius: " + _radius.get(this));
  }
}

module.exports = Circle;
