// first go with object literals

const newObj = {
  baseSal: 20000,
  draw: function () {
    console.log("this is inside object literals");
    console.log(newObj.baseSal);
  },
};

newObj.draw();

// now go with the factory functions

function factoryFunc(factSal) {
  return {
    factSal,
    factFunc: function () {
      console.log("this is inside factory function");
      console.log(factSal);
    },
  };
}

const factor = factoryFunc(10000);
factor.factFunc();

// now for the constructor function

function Showing(msg) {
  this.msg = msg;
  this.Showing = function () {
    console.log("this is inside constructor function");
    console.log(this.msg);
  };
}

const another = new Showing("hello");
another.Showing();
