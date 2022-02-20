
const users = [
    {firstName: "Marees", lastName: "S", age: 27},
    {firstName: "Elon", lastName: "Musk", age: 50},
    {firstName: "Sundar", lastName: "Pichai", age: 48},
    {firstName: "Ashwin", lastName: "Ravi", age: 38},
    {firstName: "Pant", lastName: "Rishab", age: 27}
];

// Map Example:

const names = users.map( user => user.firstName + " " + user.lastName);
console.log(names);

// Filter Example:

const usersLessThan30 = users.filter(user => user.age < 30).map(user => user.firstName + " " + user.lastName);
console.log(usersLessThan30);

// Reduce Example:

function findUsersLessThan30(accumulator, user) {
    user.age < 30 && accumulator.push(user.firstName + " " + user.lastName);
    return accumulator;
}
const _usersLessThan30 = users.reduce(findUsersLessThan30, []);
console.log(_usersLessThan30);

function ageGroupReducer(accumulator, user) {
    accumulator[user.age] = accumulator[user.age] ? accumulator[user.age] + 1 : 1;
    return accumulator;
}
const ageGroup = users.reduce(ageGroupReducer, {});
console.log(ageGroup);