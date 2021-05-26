// encapsulation example

let baseSal = 3000;
let overTime = 20;
let rate = 30;

function getWage(baseSal,overTime,rate) {
    return baseSal + (overTime * rate);
};

// can be changed to 

let employee = {
    baseSal: 3000,
    overTime: 20,
    rate: 30,
    getWage: function() {
        return this.baseSal + (this.overTime * this.rate);
    }
};

console.log(employee.getWage());