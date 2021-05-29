//  in primitive type

let x = 10;
let y = x;
x = 20;

// here x and y are independent

// in object type

let a = { value: 10 };
let b = a;

a.value = 20;
// when we store an object in a variable, then the address of that object gets stored and not the object itself
// therefore, both a and b holds the address of the object 
// as a result, a and b are end up having the same value 20


// an example

let number = 10;
function increase(number) {
	number++;
}

increase(number);
console.log(number);


// second example

let alpha = { value: 10 };
let beta = alpha;

alpha.value++;
console.log(beta);


// third example

let numb = { value: 21 };
console.log("earlier numb: ", numb);
function takeit(xyz) {
	xyz.value++;
}


takeit(numb);
console.log(numb);


// primitive type, call by value and reference type call by reference