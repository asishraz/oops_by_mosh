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

const person = Object.assign({}, canEat, canWalk);
console.log(person);

// Todo: Example for object.assign()

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const mainTarget = Object.assign(target, source);

// console.log("main target: ", mainTarget);

// console.log("the real target: ", target);

// console.log("the source: ", source);
