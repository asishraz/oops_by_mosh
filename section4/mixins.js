const canEat = {
  eat: function () {
    this.hungry--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

// ! In ES6, we can compose the above two methods using Object.assign()
// * Object.assign() takes existing objects and merge it into the new object

const person = Object.assign({}, canEat, canWalk); // This empty object {} will copy all the property
// of the canEat and canWalk in it.
console.log(person);

// Todo: Example for object.assign()

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const mainTarget = Object.assign(target, source);

// console.log("main target: ", mainTarget);

// console.log("the real target: ", target);

// console.log("the source: ", source);
