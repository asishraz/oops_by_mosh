// * use of this keyword

// "use strict";

const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};

const c = new Circle();

const d = c.draw;

//? this is method calling
// c.draw();

//? this is function calling
d(); //! this will point to the global object
