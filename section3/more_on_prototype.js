// Note:- Object with keys only return instance members
// console.log(Object.keys(c1));  // uncomment this and run it.
// it will show the output as ["radius", "move"] and not "draw"
// because draw is a prototype member

function Circle(radius) {
  this.radius = radius;
  this.move = function () {
    console.log("move");
  };
}

Circle.prototype.draw = function () {
  console.log("draw");
};

const c1 = new Circle(1);
const c2 = new Circle(2);

// for in loop returns all members, instance and prototype
for (let key in c1) console.log(key);
