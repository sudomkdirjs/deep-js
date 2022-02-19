

console.log("Start");

setTimeout(function () {
    console.log("setTimeout Callback");
}, 5000);

let startTime = new Date().getTime();
let endTime = startTime;

console.log("Starting Wile loop");

// here we are going to block main thread for 10 seconds;
while(endTime < startTime + 10000) {
    endTime = new Date().getTime();
}

console.log("End");
