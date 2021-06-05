// * in ES6 classes, all we have to do, is to use the keyword "extends" for the inheritance

class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("mov");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  } // calling the constructor in child class will throw an error
  // to avoid this, use 'super' keyword
  // 'super' keyword will reference to the parent object
  draw() {
    console.log("draw");
  }
}

const c = new Circle("red", 1);
