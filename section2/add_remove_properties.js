 function DrawCircle(radius) {
 	this.radius = radius;
 	this.draw = function() {
 		console.log("property");
 	}
 };

 const circle = new DrawCircle(2);

circle.location = { x: 1 };

// same as below
const propertyName = 'center location'; 
cirlce['propertyName'] = { x: 1 }; 

// for deleting 
delete circle['center location']