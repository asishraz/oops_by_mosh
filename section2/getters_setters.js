function Circle(radius) {
  this.radius = radius;

  let findLocation = { x: 0, y: 1 }; //with this, it can't be called by 'circle' object
  // to over come this, define a function and call this 'findlocation'

  this.getDetails = function () {
    console.log("inside another function");
    findLocation;
  };

  this.draw = function () {
    console.log("getters and setters");
  };

  Object.defineProperty(this, "findLocation", {
    get: function () {
      // getter is used to read a property
      return findLocation;
    },
  });
}

const circle = new Circle(1);
circle.draw();
circle.getDetails();

circle.findLocation;

// circle.findlocation=> can't be happened
