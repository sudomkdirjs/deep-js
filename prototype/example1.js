

let object1 = {
    name: "Marees",
    city: "Chennai",
    getIntro: function() {
        console.log(`Hi, I am ${this.name} from ${this.city}`);
    }
}

let object2 = {
    name: "Ashwin"
}


// Never do this. This will break prototype chain and This has performance issues.
object2.__proto__ = object1;

// We can access object2.getIntro because its prototype has getIntro property. (prototype of object2 is object1)
object2.getIntro(); // Hi, I am Ashwin from Chennai
object1.getIntro(); // Hi, I am Marees from Chennai

