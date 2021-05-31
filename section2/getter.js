function Person(name, lname, gender) {
  this.name = name;
  this.lname = lname;
  this.gender = gender;

  let age = 23;

  this.showDetails = function () {
    console.log(name + lname + " is " + gender);
  };
}

const person = new Person("gareeb", "coder", "male");

person.showDetails();
