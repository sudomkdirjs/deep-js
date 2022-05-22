let instance;
let count = 0;

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
        return count;
    }

    increment() {
        return ++count;
    }

    decrement() {
        return --count;
    }
}

const singletonCounter = Object.freeze(new Counter());

module.exports = singletonCounter;
