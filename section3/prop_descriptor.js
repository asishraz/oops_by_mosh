// Property Descriptor explained here

let person = { name: "asish" }; // creates an object, key-name and value-asish

// to get the prototype of the object Person
let objBase = Object.getPrototypeOf(person);

// to get idea of the property descriptor for the above object
let desc = Object.getOwnPropertyDescriptor(objBase, "toString");

// console.log(desc);

// second example of showing how we can set attributes for our own properties
let human = { name: "asish" }; // here we defined the object and its attributes

// then we make writable as false to avoid overriding any value
Object.defineProperty(human, "name", {
  writable: false,
  enumerable: true,
});

human.name = "gareeb";
console.log(Object.keys(human));
