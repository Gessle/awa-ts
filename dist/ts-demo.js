"use strict";
let x = 42;
//x = "Foobar"
console.log(x);
let myName;
myName = "John Doe";
let myAge;
myAge = 40;
console.log(`My name is ${myName} and I am ${myAge} years old.`);
let person1 = {
    name: "Jane Doe",
    age: 30,
    isStudent: true,
    id: 1
};
console.log(person1);
let person2 = {
    name: "Jack Doe",
    age: 25,
    isStudent: false,
    id: 2
};
console.log(person2);
let student = {
    name: "Julia Doe",
    age: 21,
    isStudent: true,
    id: 3,
    major: "Software Engineering"
};
console.log(student);
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("world"));
let optional;
optional = "Hello";
console.log(optional);
optional = 666;
console.log(optional);
optional = null;
console.log(optional);
function genericFunction(param) {
    return `parameter "param" is type of ${typeof param}`;
}
console.log(genericFunction("hello"));
console.log(genericFunction(42));
console.log(genericFunction(true));
console.log(genericFunction({}));
const response = {
    value: { status: 200, message: "Success" },
    isError: false
};
const response2 = {
    value: { status: 404, message: "Not found" },
    isError: true
};
console.log(response2);
