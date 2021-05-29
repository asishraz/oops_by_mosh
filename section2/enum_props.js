function Car(model, speed) {
  this.model = model;
  this.speed = speed;
  this.showOff = function () {
    console.log("the model is: ", model);
    console.log("and the speed is: ", speed);
  };
}

const car = new Car("lambo", "230kmph");

const keys = Object.keys(car);
console.log(keys);

// const model1 = "lamborghini";
// const model2 = "ferrari";

// const speed1 = "200kmph";
// const speed2 = "190kmph";
// const car1 = new Car(model1,speed1);
// const car2 = new Car(model2,speed2);

// car1.showOff();
// car2.showOff();

// for (let key in car2) {
// 	if (typeof car1[key]  == 'function')
// 		console.log("its lambo");
// 	else(typeof car2[key]  == 'function')
// 		console.log("its ferrari");
// };
