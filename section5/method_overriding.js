// method over riding in ES6 classes

class Shape {
  move() {
    console.log("from parent");
  }
}

class Circle extends Shape {
  move() {
    super.move();
    console.log("from child");
  }
}

const c = new Circle();
