// many forms in one , that is polymorphism

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

function Circle() {}

function Square() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log("in circle"); // * duplicate method in circle
};

extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log("in square"); // * duplicate method in square
};

const shapes = [new Circle(), new Square()];

for (let shape of shapes) shape.duplicate(); // ! example of polymorphism
