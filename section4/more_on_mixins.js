function mixin(target, ...source) {
  Object.assign(target, ...source);
}

const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

const canSwim = {
  swim: function () {
    console.log("swimmer");
  },
};

function Person() {}

function Goldfish() {}

mixin(Person.prototype, canEat, canWalk);

mixin(Goldfish.prototype, canEat, canSwim);

const person = new Person();
const gld = new Goldfish();
