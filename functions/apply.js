

let name = {
    firstName: "Mareeswaran",
    lastName: "Sooriamoorthi"
}

let printDetails = function(hometown, state) {
    console.log(`My name is ${this.firstName} ${this.lastName}. I am from ${hometown}, ${state}`);
}

printDetails.apply(name, ["Chennai", "Tamil Nadu"]);

let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar"
}

printDetails.apply(name2, ["Mumbai", "Maharastra"]);