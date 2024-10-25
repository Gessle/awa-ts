let x: number = 42
//x = "Foobar"
console.log(x)

let myName: string
myName = "John Doe"

let myAge: number
myAge = 40

console.log(`My name is ${myName} and I am ${myAge} years old.`)

type TPerson = {
    name: string,
    age: number,
    isStudent?: boolean,
    readonly id: number
}

let person1: TPerson = {
    name: "Jane Doe",
    age: 30,
    isStudent: true,
    id: 1
}

console.log(person1)

interface IPerson {
    name: string,
    age: number,
    isStudent?: boolean,
    readonly id: number
}

let person2: IPerson = {
    name: "Jack Doe",
    age: 25,
    isStudent: false,
    id: 2
}

console.log(person2)

interface IStudent extends IPerson {
    major: string
}

let student: IStudent = {
    name: "Julia Doe",
    age: 21,
    isStudent: true,
    id: 3,
    major: "Software Engineering"
}

console.log(student);

function greet(name: string): string {
    return `Hello, ${name}!`
}

console.log(greet("world"));

let optional: string | number | null

optional = "Hello"
console.log(optional);
optional = 666
console.log(optional);
optional = null
console.log(optional);

function genericFunction<T>(param: T): String {
    return `parameter "param" is type of ${typeof param}`
}

console.log(genericFunction("hello"));
console.log(genericFunction(42));
console.log(genericFunction(true));
console.log(genericFunction({}));

type TGeneric<data> = {
    value: data,
    isError: boolean
}

const response: TGeneric<{status: number, message: string}> = {
    value: {status: 200, message: "Success"},
    isError: false
}

type TResponseValue = TGeneric<{status: number, message: string}>

const response2: TResponseValue = {
    value: {status: 404, message: "Not found"},
    isError: true
}

console.log(response2);
