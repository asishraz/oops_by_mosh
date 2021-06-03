// ! in hoisting, we call call the function before its declration
// * it doesn't apply to function expression

Circle(); // ! this will not raise an error due to hoisting
Square(); // * this wil raise a reference error, as we are dealing with constant

// function declaration
function Circle() {}

// function expression
const Square = function () {};


// class Declaration
class Circle1() {

}

// class expression
const Sqaure1 = class {

}