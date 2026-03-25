//Primitive

// 7 types : String, Number, Bollean, null, undefined, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456778889n;


// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["suman", "saw", "yoga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const  myfunction = function () {
    console.log("Hello world");

}
console.log(typeof anotherId);

//++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Sumansawdotcom"

let anothername = "chaiaurcode"
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "suman@google.com"

console.log(userOne.email);
console.log(userTwo.email);