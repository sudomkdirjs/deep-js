// JavaScript Prototype

// All JavaScript objects inherit properties and methods from a prototype.

// Object Constructor
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}
  
let person1 = new Person("John", "Doe", 50);
let person2 = new Person("Sally", "Rally", 48);

// The JavaScript prototype property allows you to add new properties to object constructors:
Person.prototype.nationality = "Indian";

// The JavaScript prototype property also allows you to add new methods to objects constructors:
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};

// __proto__ points to the prototype object of the constructor function.