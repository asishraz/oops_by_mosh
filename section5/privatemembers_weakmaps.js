//* accessing private members through weakMaps

const _radius = new WeakMap();
const _move = new WeakMap();
class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, function () {
      console.log("move", this);
    });
  }

  //! to access the private property (radius), we use "get" method
  draw() {
    // console.log(_radius.get(this));
    _move.get(this)();
    console.log("draw");
  }
}

const c = new Circle(1);
