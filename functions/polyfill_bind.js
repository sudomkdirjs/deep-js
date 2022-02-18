

let name = {
    firstName: "Mareeswaran",
    lastName: "Sooriamoorthi"
}

let printDetails = function(hometown, state) {
    console.log(`My name is ${this.firstName} ${this.lastName}. I am from ${hometown}, ${state}`);
}

let printDetails1 = printDetails.bind(name, "Chennai");
printDetails1("Tamil Nadu");

Function.prototype.mybind = function(arg1, ...args) {
    let func = this;
    return function(...args2) {
        func.apply(arg1, [...args, ...args2]);
    }
}

let printDetails2 = printDetails.mybind(name, "Chennai");
printDetails2("Tamil Nadu");

let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar"
}

let printDetails3 = printDetails.mybind(name2, "Mumbai");
printDetails3("Maharastra");