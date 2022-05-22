let instance;
let counter = 0;

class Counter {

    constructor() {
        if (instance) {
            throw new Error("You can create only one Instance!");
        }
        instance = this;
    }

    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        return ++count;
    }

    decrement() {
        return --count;
    }
}

let counter1 = new Counter();
let counter2 = new Counter();
// Error: You can create only one Instance!
