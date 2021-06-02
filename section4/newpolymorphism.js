function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle() {}

function Square() {}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("shape");
};

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log("cirlce");
};

extend(Square, Shape);
Square.prototype.duplicate = function () {
  console.log("square");
};

const shapes = [new Circle(), new Square()];

// * great example of Polymorphism
for (let shape of shapes) {
  shape.duplicate();
}

// if polymorphism was not there
// ! this much we have to write
// for (let shape of shapes) {
//   if (shape.typeOf === "circle") {
//     shape.prototype.duplicate();
//   } else if (shape.typeOf === "square") {
//     shape.duplicate();
//   }
// }
