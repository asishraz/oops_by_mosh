//* use of this keyword

const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};

const c = new Circle();
c.draw();

const xyz = c.draw;
console.log(xyz);
