// * static methods are often used to create utility function that are not specific to a given object.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  //? this is instance method, bcz this is available on the instance of a the class(which is an object)
  draw() {}

  // * this is static method, which is available on the class itself and not like instance
  // !  we use the keyword static
  static parse(str) {}
}

const circle = new Circle(1);
