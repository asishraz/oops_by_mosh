// constructor method


// function Circle(radius) {
//     // console.log("this",this); "new" keyword is important, otherwise 'this' points to global object (i.e Window)
//     this.radius = radius;
//     this.draw = function() {
//         console.log(this.radius);
//     }
// };

// const another = new Circle(1);
// another.draw();


// function Circle(radius) {
//     this.radius = radius;
//     console.log(radius);
// };

// const another = new Circle(9);



// factory function 

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log("factory");
        }
    }
};

const first = createCircle(3);
first.draw();


//  constructor function 

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("constructor");
    }
    
};

const second = new Circle(3);
second.draw();