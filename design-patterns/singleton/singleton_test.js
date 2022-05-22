// Singleton

let chai = require('chai');

const { assert } = chai;

let singletonCounter = require('./singletonCounter');

describe("Singleton", () => {
    it("Incrementing one time should be 1", () => {
        singletonCounter.increment();
        assert.equal(singletonCounter.getCount(), 1);
    });

    it("Incrementing three extra times should be 4", () => {
        singletonCounter.increment();
        singletonCounter.increment();
        singletonCounter.increment();
        assert.equal(singletonCounter.getCount(), 4);
    });

    it("Decrementing one time should be 3", () => {
        singletonCounter.decrement();
        assert.equal(singletonCounter.getCount(), 3);
    });

});
