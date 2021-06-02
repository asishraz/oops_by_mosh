function Shape(color) {
  this.color = color;

  //*  by default, "this" will point to the global object(window)
  //*  as we didn't set the color property on the new instance of the circle object
  //!  this.color - will set it on the window object
  //todo:  try 'window.color', you will see "pink"
}

function Circle(radius, color) {
  Shape(color);
  this.radius = radius;
}

const c = new Circle(1, "pink");
