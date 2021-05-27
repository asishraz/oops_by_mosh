//  factory function

// this is by using object literals
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log("draw");
//     }
// };

// circle.draw();


// the above object literals is good if we don't have more than 1 method
// now factory function

function createCircle(radius) {
    return {
        radius, //since key and val are same, then we can remove the value
        draw: function() {
            console.log(radius);
        }
    }
};

const circle = createCircle(14);
circle.draw();