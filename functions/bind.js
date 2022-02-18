

let name = {
    firstName: "Mareeswaran",
    lastName: "Sooriamoorthi"
}

let printDetails = function(hometown, state) {
    console.log(`My name is ${this.firstName} ${this.lastName}. I am from ${hometown}, ${state}`);
}

let printDetails1 = printDetails.bind(name, "Chennai", "Tamil Nadu");
printDetails1();

let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar"
}

let printDetails2 = printDetails.bind(name2, "Mumbai");
printDetails2("Maharastra");