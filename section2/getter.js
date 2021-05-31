function Person(name, lname) {
  this.name = name;
  this.lname = lname;

  let age = 27;

  this.showPerson = function () {
    console.log(name + lname);
  };
  Object.defineProperty(this, "age", {
    get: function () {
      return age;
    },

    set: function (value) {
      if (!value) throw new Error("Invalid age");
      age = value;
    },
  });
}

const person = new Person("asish", "raz");

person.showPerson();
person.age = 29;
