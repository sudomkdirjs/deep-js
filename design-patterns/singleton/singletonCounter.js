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

const singletonCounter = Object.freeze(new Counter());

export default singletonCounter;
